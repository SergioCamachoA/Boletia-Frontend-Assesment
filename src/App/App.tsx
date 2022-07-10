import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import NewBannerElementPage from "../pages/NewBannerElementPage"
import SampleComponentPage from "../pages/SampleComponentPage"
import Layout from "../pages/Layout"
import "./app.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="new-banner-element" element={<NewBannerElementPage />} />
          <Route path="sample-component" element={<SampleComponentPage />} />
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App
