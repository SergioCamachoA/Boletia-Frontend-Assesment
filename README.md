### CREATE NEW COMPONENT

#### To add a new component or module to the template:

1. Create the button for navigation importing the `NavItem` component from the `NavItem.tsx` file.
2. Create the new page importing the `PageWithSideBar` component from the `PageWithSideBar.tsx` file
3. A route must be added the `App.tsx` file containg the new page.

#### To add a new component to the design-system:

Style tags must be added to `app.css` and `base.css` files in order to be applied to both the webapp and the storybook UI.

### VALIDATIONS

The image inputs valitate for image weight (max 800kb) and dimensions depending on its use (mobile: 1440 x 1080, tablet: 1920 x 1080, desktop: 2560 x 1440). Error messages are displayed below each input when requirements are not met. If successful, a preview of the image is displayed below the input.

The url input validates for a valid url. An error message is displayed below the input when the url is not valid.

The date input only takes date format.

The time input only takes time format.

### RESPONSIVE DESIGN

The navbar shows a burger icon on displays smaller than 768px. The burger icon is used to open the navigation list.

The navigation sidebar is shown on displays larger than 768px.

### SCRIPS

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn storybook`

Runs the storybook UI.
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.
