This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Project File Structure

In this project, a walkthrough is provided below to read the folder structure :

1. The root folder for everthing is called `src`
2. Inside, There is one `components` folder for all the logic and resuable components, `styles` folder for styling.
3. Besides these two above mentioned folder, we have a file called `index.js` which is the entry point for the application.
4. The last one called `Main.js` is another component which renders out other components  from the `components` folder.


## API 

I have used 2 API providers for the application
1. The first API is `Openweather` which I am using to get Latitude and Longitude.
2. The Second API is `Darksky` which I am using to query the latitude and longitude and then fetching weather details from a JSON file.


## Styling

I have used A CSS Pre-processor called `SASS` to do all the styling in the application.
1. `main.scss` : to import all other files finally together at this one place.
2. `_base.css` : to set-up base styles such as default size, styling, resets etc.
3. `detail.scss` : for actually styling the application. All the custom css styles is here at one place.


## Working of this Application

I have designed and developed this application as stated in the requirement. A walkthrough for the features is provided below : 

1. When loaded, this application renders out the weather details of Bangalore for present time.
2. We can type city name in the input as well as select dates to render out weather details.It could be a forecast or weather from past days as provided by the `Darksky API`. When passing vague quantity, the application throws an error.
3. This application can be counted as responsive for mid-range devices.


## Hosting & Deployment

I have my own domain under the name `abhinavanshul.com` , hence I have hosted and deployed under this subdomain. This application is hosted on Netlify. To preview a live Demo just visit `cuebook.abhinavanshul.com`








