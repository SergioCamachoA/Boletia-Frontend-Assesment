import React, { useState } from "react"
import Button from "../design-system/Button/Button"
import ErrorMessage from "../design-system/ErrorMessage/ErrorMessage"
import styled from "styled-components"
import { laptopScreenCSS } from "../design-system/assets/styles/media-queries"

export type NewBannerElementFormProps = {
  className?: string
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid var(--dark-smoke);
  border-radius: 1rem;
  padding: 32px;
  width: 80vw;
  ${laptopScreenCSS} {
    width: 40vw;
  }
  input {
    width: 100%;
    margin: 8px 0;
    border: 1px solid var(--dark-smoke);
    border-radius: 0.5rem;
    padding: 8px;
    transition: 0.5s ease 0s;
  }
  .input-error {
    border: 2px solid var(--orange);
  }
  .image-input {
    display: none;
  }
  .uploaded-image {
    width: 100px;
    display: block;
  }
  .isHidden {
    display: none;
  }
`

const NewBannerElementForm: React.FC<NewBannerElementFormProps> = ({
  className,
}: NewBannerElementFormProps) => {
  const [mobileImage, setMobileImage] = useState<File>()
  const [tabletImage, setTabletImage] = useState<File>()
  const [desktopImage, setDesktopImage] = useState<File>()

  const [mobileImageData, setMobileImageData] = useState<string>()
  const [tabletImageData, setTabletImageData] = useState<string>()
  const [desktopImageData, setDesktopImageData] = useState<string>()

  const [validatedMobile, setValidatedMobile] = useState(false)
  const [validatedTablet, setValidatedTablet] = useState(false)
  const [validatedDesktop, setValidatedDesktop] = useState(false)

  const [mobileErrorMessage, setMobileErrorMessage] = useState("")
  const [tabletErrorMessage, setTabletErrorMessage] = useState("")
  const [desktopErrorMessage, setDesktopErrorMessage] = useState("")

  const [currentImage, setCurrentImage] = useState<File>()

  const [sourceMobileImage, setSourceMobileImage] = useState<HTMLImageElement>()
  const [sourceTabletImage, setSourceTabletImage] = useState<HTMLImageElement>()
  const [sourceDesktopImage, setSourceDesktopImage] =
    useState<HTMLImageElement>()

  const [eventName, setEventName] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventTime, setEventTime] = useState("")
  const [eventURL, setEventURL] = useState("")

  const [eventNameError, setEventNameError] = useState(false)
  const [eventDateError, setEventDateError] = useState(false)
  const [eventTimeError, setEventTimeError] = useState(false)
  const [eventURLError, setEventURLError] = useState(false)
  const [eventURLErrorMessage, setEventURLErrorMessage] = useState("")
  const [eventMobileImageError, setEventMobileImageError] = useState(false)
  const [eventTabletImageError, setEventTabletImageError] = useState(false)
  const [eventDesktopImageError, setEventDesktopImageError] = useState(false)

  const [submittedMessage, setSubmittedMessage] = useState("")

  const mobileInputRef = React.useRef<HTMLInputElement>(null)
  const tabletInputRef = React.useRef<HTMLInputElement>(null)
  const desktopInputRef = React.useRef<HTMLInputElement>(null)

  const uploadImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const inputName = event.target.name
    const file = event.target.files && event.target.files[0]

    if (file) {
      if (inputName === "mobile-image-upload") {
        if (file.size <= 800000) {
          setMobileImage(file)
          setCurrentImage(file)
          setMobileErrorMessage("")
        } else {
          setMobileErrorMessage("image must not exceed 800kb")
        }
      } else if (inputName === "tablet-image-upload") {
        if (file.size <= 800000) {
          setTabletImage(file)
          setCurrentImage(file)
          setTabletErrorMessage("")
        } else {
          setTabletErrorMessage("image must not exceed 800kb")
        }
      } else if (inputName === "desktop-image-upload") {
        if (file.size <= 800000) {
          setDesktopImage(file)
          setCurrentImage(file)
          setDesktopErrorMessage("")
        } else {
          setDesktopErrorMessage("image must not exceed 800kb")
        }
      }
    } else {
    }
  }

  React.useEffect(() => {
    let fileReader: FileReader,
      isCancel = false
    if (currentImage) {
      fileReader = new FileReader()
      fileReader.onload = (e) => {
        const target = e.target
        const result = target?.result
        if (result && !isCancel && typeof result === "string") {
          if (currentImage === mobileImage) setMobileImageData(result)
          if (currentImage === tabletImage) setTabletImageData(result)
          if (currentImage === desktopImage) setDesktopImageData(result)
        }
      }
      fileReader.readAsDataURL(currentImage)
    }
    return () => {
      isCancel = true
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort()
      }
    }
  }, [currentImage])

  React.useEffect(() => {
    if (mobileImageData) {
      const sourceMobile = new Image()
      sourceMobile.src = mobileImageData
      setSourceMobileImage(sourceMobile)
    }
    if (tabletImageData) {
      const sourceTablet = new Image()
      sourceTablet.src = tabletImageData
      setSourceTabletImage(sourceTablet)
    }
    if (desktopImageData) {
      const sourceDesktop = new Image()
      sourceDesktop.src = desktopImageData
      setSourceDesktopImage(sourceDesktop)
    }
  }, [mobileImageData, tabletImageData, desktopImageData])

  React.useEffect(() => {
    if (
      sourceMobileImage?.width === 1440 &&
      sourceMobileImage?.height === 1080
    ) {
      setValidatedMobile(true)
      setMobileErrorMessage("")
    } else {
      setValidatedMobile(false)
      sourceMobileImage &&
        setMobileErrorMessage("image must be 1440 x 1080 pixels")
    }
    if (
      sourceTabletImage?.width === 1920 &&
      sourceTabletImage?.height === 1080
    ) {
      setValidatedTablet(true)
      setTabletErrorMessage("")
    } else {
      setValidatedTablet(false)
      sourceTabletImage &&
        setTabletErrorMessage("image must be 1920 x 1080 pixels")
    }
    if (
      sourceDesktopImage?.width === 2340 &&
      sourceDesktopImage?.height === 700
    ) {
      setValidatedDesktop(true)
      setDesktopErrorMessage("")
    } else {
      setValidatedDesktop(false)
      sourceDesktopImage &&
        setDesktopErrorMessage("image must be 2340 x 700 pixels")
    }
  }, [sourceMobileImage, sourceTabletImage, sourceDesktopImage])

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let validURL = false
    setEventNameError(!eventName)
    setEventDateError(!eventDate)
    setEventTimeError(!eventTime)
    setEventURLError(!eventURL)
    setEventMobileImageError(!mobileImage)
    setEventTabletImageError(!tabletImage)
    setEventDesktopImageError(!desktopImage)
    const isValidUrl = (urlString: string) => {
      try {
        return Boolean(new URL(urlString))
      } catch (e) {
        return false
      }
    }
    if (eventURL) {
      validURL = isValidUrl(eventURL)
      setEventURLErrorMessage(validURL ? "" : "invalid URL")
    }
    if (
      eventName &&
      eventDate &&
      eventTime &&
      validURL &&
      mobileImage &&
      tabletImage &&
      desktopImage
    ) {
      setSubmittedMessage("info submitted!")
      setEventName("")
      setEventDate("")
      setEventTime("")
      setEventURL("")
      setMobileImageData(undefined)
      setTabletImageData(undefined)
      setDesktopImageData(undefined)
      setValidatedMobile(false)
      setValidatedTablet(false)
      setValidatedDesktop(false)
    }
  }

  return (
    <StyledForm
      className={className}
      onChange={() => {
        setSubmittedMessage("")
      }}
    >
      {submittedMessage && <h3>{submittedMessage}</h3>}
      <input
        type="text"
        placeholder="event name"
        className={eventNameError ? "input-error" : ""}
        value={eventName}
        onChange={(e) => {
          setEventName(e.target.value)
        }}
      />
      <input
        type="date"
        className={eventDateError ? "input-error" : ""}
        value={eventDate}
        onChange={(e) => {
          setEventDate(e.target.value)
        }}
      />
      <input
        type="time"
        className={eventTimeError ? "input-error" : ""}
        value={eventTime}
        onChange={(e) => {
          setEventTime(e.target.value)
        }}
      />
      <input
        type="url"
        placeholder="event url"
        className={eventURLError ? "input-error" : ""}
        value={eventURL}
        onChange={(e) => {
          setEventURL(e.target.value)
        }}
      />
      {eventURLErrorMessage && <ErrorMessage text={eventURLErrorMessage} />}
      <input
        className="image-input"
        accept="image/*"
        type="file"
        name="mobile-image-upload"
        id="mobile-image-upload"
        onChange={(e) => uploadImageHandler(e)}
        ref={mobileInputRef}
      />
      <Button
        className={`${
          eventMobileImageError && "input-error"
        } upload-image-button`}
        label="add mobile image"
        onClick={(e) => {
          e.preventDefault()
          mobileInputRef.current?.click()
        }}
      />
      {mobileErrorMessage && <ErrorMessage text={mobileErrorMessage} />}
      {validatedMobile && (
        <img
          src={mobileImageData}
          alt="uploaded-mobile"
          className={validatedMobile ? "uploaded-image" : "isHidden"}
        />
      )}
      <input
        className="image-input"
        accept="image/*"
        type="file"
        name="tablet-image-upload"
        id="tablet-image-upload"
        onChange={(e) => uploadImageHandler(e)}
        ref={tabletInputRef}
      />
      <Button
        className={`${
          eventTabletImageError && "input-error"
        } upload-image-button`}
        label="add tablet image"
        onClick={(e) => {
          e.preventDefault()
          tabletInputRef.current?.click()
        }}
      />
      {tabletErrorMessage && <ErrorMessage text={tabletErrorMessage} />}
      {validatedTablet && (
        <img
          src={tabletImageData}
          alt="uploaded-tablet"
          className={validatedTablet ? "uploaded-image" : "isHidden"}
        />
      )}
      <input
        className="image-input"
        accept="image/*"
        type="file"
        name="desktop-image-upload"
        id="desktop-image-upload"
        onChange={(e) => uploadImageHandler(e)}
        ref={desktopInputRef}
      />
      <Button
        className={`${
          eventDesktopImageError && "input-error"
        } upload-image-button`}
        label="add desktop image"
        onClick={(e) => {
          e.preventDefault()
          desktopInputRef.current?.click()
        }}
      />
      {desktopErrorMessage && <ErrorMessage text={desktopErrorMessage} />}
      {validatedDesktop && (
        <img
          src={desktopImageData}
          alt="uploaded-desktop"
          className={validatedDesktop ? "uploaded-image" : "isHidden"}
        />
      )}
      <Button
        className="submit-form-button"
        label="submit event"
        onClick={(e) => handleSubmit(e)}
      />
    </StyledForm>
  )
}

export default NewBannerElementForm
