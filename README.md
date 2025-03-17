# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Overview of what is what

- `app.json` - this is where we control, sort of what we would call the metadata of the application , like it controls the name of the app when it goes to play store, icon you see when you install the application on your phone ..etc.

## Played around on how stack & Tab Navigation can be done using expo

- Now i got it - i was confused at the start but now i feel better when i did it step by step ,took time but never mind initial understanding of how things working helps, now i can just go ahead and build the app, documentation is great. went through <https://docs.expo.dev/develop/file-based-routing/> & <https://docs.expo.dev/router/advanced/tabs/>
- When the app loads , it shows the index.tsx file present in (home) & remaining as usual.For this commit & test code - i will upload pictures for my assets/images/reference to get back to this later on what is displayed for what code i have tried.

![When app loads Home Tab index tsx](assets/images/When app loads Home Tab index tsx.jpg) ![Home details Stack](assets/images/Home details Stack.jpg) ![User Tab](assets/images/User Tab.jpg) ![User details Stack](assets/images/USer details Stack.jpg) ![Settings Tab](assets/images/Settings Tab.jpg) ![Test Tab](assets/images/Test Tab.jpg)

- ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
  - ESLint is completely pluggable. Every single rule is a plugin and you can add more at runtime. You can also add community plugins, configurations, and parsers to extend the functionality of ESLint.
  - <https://github.com/facebook/react-native/tree/main/packages/eslint-config-react-native>
  - `yarn add --dev eslint prettier @react-native/eslint-config`
  - created file `.eslintrc` and telling eslint you're going to use React Native Community Configuration.
  - In `package.json` - "lint": "eslint . --ext .js" in scripts - calling eslint package and saying (.) means check whole directory but only for the `js` files.
  - - `yarn add react-native-paper` - for fun

```tsx
$ yarn lint
yarn run v1.22.22
$ eslint . --ext .js,.jsx,.ts,.tsx
Warning: React version not specified in eslint-plugin-react settings. See https://github.com/jsx-eslint/eslint-plugin-react#configuration .

C:\Users\abhis\Desktop\ReactNative\projects\MealsToGo\app\(tabs)\(home)\_layout.tsx
   5:5  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  16:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  17:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope

C:\Users\abhis\Desktop\ReactNative\projects\MealsToGo\app\(tabs)\(home)\details.tsx
  5:5  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  6:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
....
...
..
.
✖ 33 problems (33 errors, 0 warnings)

```

- Fix was for me to add `import React from 'react';` in the following error files .. silly
- After Fix looks like :

```jsx
$ yarn lint
yarn run v1.22.22
$ eslint . --ext .js,.jsx,.ts,.tsx
Warning: React version not specified in eslint-plugin-react settings. See https://github.com/jsx-eslint/eslint-plugin-react#configuration .
Done in 4.15s.
```

## General Idea

- **app directory**

The **app** is a special directory. Any file you add to this directory becomes a route inside the native app and reflects the same URL for that route on the web.

- **Root layout**

Traditionally, React Native projects are structured with a single root component (defined as **App.js** or **index.js**). Similarly, the first layout file (**\_layout.tsx**) inside the **app** directory is considered to be the single root component.

- **Create a route**

In the **app** directory, a route is created by adding a file or a nested directory that includes **index.tsx** file.

For example, to create an initial route of your app, you can add **index.tsx** to the **app** directory.

## Resources

- Card : <https://callstack.github.io/react-native-paper/docs/components/Card/>
- styled-components can be used with React Native in the same way and with the same import.<https://styled-components.com/docs/basics#react-native> - styleSheets are great , but we want more consistency - there's something called DesignOps - when you're building a product , taking into account all of the constraints and making sure that the constraints are fit,picture perfect along the way - a design system - a theme - which gives us consistency `styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.` - so we will move away from StyleSheet syntax and create components having their styling already on it. For example : Also DO `yarn add styled-components` & `yarn add --dev @types/styled-components` & `yarn add @types/styled-components @types/styled-components-react-native`

```tsx
import React from "react";
import styled from "styled-components/native";

const StyledView = styled.View`
  background-color: papayawhip;
`;

const StyledText = styled.Text`
  color: #bf4f74;
`;

class MyReactNativeComponent extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>Hello World!</StyledText>
      </StyledView>
    );
  }
}
```

- Now if we want to acheive consistency - we go use this [Theming](https://styled-components.com/docs/advanced) - styled-components has full theming support by exporting a `<ThemeProvider>` wrapper component. This component provides a theme to all React components underneath itself via the `context API`. In the render tree all styled-components will have access to the provided theme, even when they are multiple levels deep.
- use this <https://react.dev/> to understand things like what's [contextAPI](https://react.dev/learn/passing-data-deeply-with-context#context-an-alternative-to-passing-props) in [react](https://legacy.reactjs.org/docs/context.html).`Context provides a way to pass data through the component tree without having to pass props down manually at every level.`
- let's setup our theme: (create infrastructure folder & theme folder as well)

- Loading custom fonts:
  - expo google fonts - [github](https://github.com/expo/google-fonts) - Do `npx expo install @expo-google-fonts/inter expo-font` - get oswald & lato fonts - `yarn add @expo-google-fonts/oswald` & `yarn add @expo-google-fonts/lato`
- star.js : Icon of star - we need [react-native-svg](https://github.com/software-mansion/react-native-svg) to load starIcon
  - Use with [svg files](https://github.com/software-mansion/react-native-svg/blob/main/USAGE.md#use-with-svg-files) - `import { SvgXml } from 'react-native-svg';`
  - Now we need to render the star icon the amount of times rating occurs.

```bash
yarn expo start --clear

The -c or --clear flag is used to clear the Metro bundler cache. The Metro bundler cache is used to speed up subsequent starts of the Expo development server. However, sometimes the cache can become outdated or corrupted, leading to issues such as:

Unexpected behavior: The app might not reflect the latest code changes.
Build errors: The bundler might fail to build the app due to cached artifacts conflicting with new dependencies or code.
Clearing the cache forces Metro to rebuild everything from scratch, ensuring you have a clean and consistent build. It's often helpful to use the -c flag in situations like:

After updating dependencies: When you add, remove, or update npm or yarn packages, clearing the cache can prevent issues related to dependency changes.
When encountering unexplained errors: If you are experiencing strange errors or the app is not behaving as expected, clearing the cache is a good first step to rule out cache-related problems.

For a fresh start: Using -c ensures you are starting with a clean slate, which can be useful when you want to be absolutely sure you are running the latest version of your code and dependencies.
In summary, npx expo start -c or yarn expo start --clear starts the Expo development server with a cleared cache, which is useful for resolving cache-related issues and ensuring a fresh start, especially after dependency changes or when encountering unexpected behavior.
```

- `open.js` - Adding Open Now SVG.
- Build Spacer Component: Having a consistent spacer is better than using direct Views or marginLeft..etc
  - optimize this component:
- also if we see error on android like : "Error while updating property 'position' in shadow node of type : RTC View"..etc - one of the scenarios where you write code for IOS and it breaks on android at times. - this means -> Android is having difficulties rendering the styled component view from the get-go when the app launches.It's unable to process getVariant function on load.- so the way to go about this is `inline function` that we're running inside of `styled.View` - we need to seperate that out. Instead of Spacer component immediately retun styledView , we return the variant that it needs to render instead of running dynamic function .By doing this we optimize our ability to Render out the spacer , so it will become a normal component (and we need to import React) . we will utilize `useTheme` hook , that styled system extends us so that we can calculate variant inside of function body of `Spacer` , which calculate getvariant Func ahead of time and we return `<SpacerView>` we'll we give the variant. and ensure that spacerview renders out children if there are any.
- why do we need consistency?:

  - also build a custom text component(created typography folder ) & get rid of Title`styledComponent` to have a consistent text across the code base. existing example : Spacer component.

- `FlatList` : put all of our restaurant cards in a list . just like we see restaurants info on food delivery apps.Allowing our data to be rendered in a specific way.
  - <https://reactnative.dev/docs/flatlist>
  - <https://react.dev/learn/rendering-lists>
  - <https://legacy.reactjs.org/docs/lists-and-keys.html> - why we need keys - great article to refer.`Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:`
  - <https://reactnative.dev/docs/scrollview>
- React Navigation - <https://reactnavigation.org/docs/getting-started/> - but i'll be using expo navigation tools - easy peasey. - able to navigate to details page as i needed using [`router`](https://docs.expo.dev/router/advanced/stack/#set-screen-options-dynamically)
- for Icons: [Expo Icons Index](https://icons.expo.fyi/Index) & [Expo Icons Documentation](https://docs.expo.dev/guides/icons/#expovector-icons)

- [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context) & [Context - old docs](https://legacy.reactjs.org/docs/context.html) - `Context lets a parent component provide data to the entire tree below it.`
- Anytime we're trying to get information from somewhere , it's in the same place.so we're going to be isolating how we talk to service.the way we do that through the pattern called `services`.create a folder.This folder is going to be where all of our logic around talking to external services happen, whether it be google , facebook , or aws ..etc.here is where we're going to talking to the servers.also name different services we have inside that folder like `restaurant service` where we get restaurant data and we can have `user service` to get user info.For now we'll use mock data to play around.
  - every service will be linked to react-context.
  - also whenever we do an API call , it's going to be something called `a promise` which you need to `await` runs asynchronously, let's mimic our mocks as a promise as in real-time.
  - <https://reactnative.dev/docs/react-native-devtools>
- [camelize package](https://www.npmjs.com/package/camelize) - recursively transform key strings to camel-case - ex : `fee_fie_foe: 'fum',` To `"feeFieFoe": "fum",` - `yarn add camelize`

- Setting Up RestaurantContext
- Hooking up our Context
- [Activity Indicator](https://callstack.github.io/react-native-paper/docs/components/ActivityIndicator/)
- ArchitectureOverview - UptoNow
  ![ArchitectureOverview](/assets/images/image.png)
- Geocoding & Search
  - [Geocoding API Overview](https://developers.google.com/maps/documentation/geocoding/overview) - The Geocoding API is a service that accepts a place as an address, latitude and longitude coordinates, or Place ID. It converts the address into latitude and longitude coordinates and a Place ID, or converts latitude and longitude coordinates or a Place ID into an address.
  - [places API Overview](https://developers.google.com/maps/documentation/places/web-service/overview) - The Places API is a service that accepts HTTP requests for location data through a variety of methods. It returns formatted location data and imagery about establishments, geographic locations, or prominent points of interest.
- Setting Up Geocoding Service(`location Folder`)
- setting up our geocidng context
- Re-arranged code
- Hooking Up the SearchBar
- naviagation - <https://docs.expo.dev/tutorial/add-navigation/>

```text
Expo Router is a file-based routing framework for React Native and web apps. It manages navigation between screens and uses the same components across multiple platforms. To get started, we need to know about the following conventions:

app directory: A special directory containing only routes and their layouts. Any files added to this directory become a screen inside our native app and a page on the web.
Root layout: The app/_layout.tsx file. It defines shared UI elements such as headers and tab bars so they are consistent between different routes.
File name conventions: Index file names, such as index.tsx, match their parent directory and do not add a path segment. For example, the index.tsx file in the app directory matches / route
```

- <https://docs.expo.dev/router/navigating-pages/#understanding-native-navigation>
- <https://reactnative.dev/docs/pressable>
- <https://docs.expo.dev/develop/dynamic-routes/#access-parameters-from-dynamic-segments>

- Restaurant details screen - group of menu List - <https://callstack.github.io/react-native-paper/docs/components/List/ListAccordionGroup> - add scrollView

- Maps Feature - show the rastaurants in a location & when we click on restaurant pop-uup it should take us to restaurants-details screen of that restaurant in restaurants tab.

  - Install react native maps from [expo](https://docs.expo.dev/versions/latest/sdk/map-view/) - `yarn add  react-native-maps`
  - maps screen & search - build a standalone search on maps screen
  - Setting The Map Region & Map [Markers](https://github.com/react-native-maps/react-native-maps?tab=readme-ov-file#rendering-a-list-of-markers-on-a-map)
  - Custom maps [callout](https://github.com/react-native-maps/react-native-maps?tab=readme-ov-file#rendering-a-custom-marker-with-a-custom-callout) , when we click on map marker it show us the image of restaurant..etc - `yarn add react-native-webview` - [ref](https://github.com/react-native-maps/react-native-maps?tab=readme-ov-file#custom-callouts) - well callout thing doesn't work on android yet - time wasted lol.
  - I will link a marker to details page as callout isn't working on android.

- `Favourites Feature` - to remind ourselves here, services layer is where we interact with data - let's hookup favourites feature.
  - `GoodToKnowWhatIsWhat`: In CSS, `z-index` controls the `stacking` order of positioned elements along the z-axis, meaning which `elements` appear on `top` of others when they overlap. `Elements with a higher z-index are placed in front of those with a lower value`, but it only works on elements with a `position` value other than static.
- `Favourites Bar`
- `Storing Favourites` - problem - when we reload the app , all of the favourites dissapear, they are not being persisted , because useState is in local state & we're not storing it in anywhere , we can always store it on phone and on server as well , it's better to store them on phone ( as a caching mechanism until we have backend infrastructure let's store the first 20 favourites on phone itself.) - so how we can store it ? In react-native we have [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/usage/) & also refer what does expo say about [AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/)ByExpo - Do `npx expo install @react-native-async-storage/async-storage`

```bash
$ npx expo install @react-native-async-storage/async-storage
› Installing 1 SDK 52.0.0 compatible native module using yarn
> yarn add @react-native-async-storage/async-storage@1.23.1
yarn add v1.22.22
..
...
.....
success Saved lockfile.
success Saved 3 new dependencies.
info Direct dependencies
└─ @react-native-async-storage/async-storage@1.23.1
info All dependencies
├─ @react-native-async-storage/async-storage@1.23.1
├─ is-plain-obj@2.1.0
└─ merge-options@3.0.4
Done in 14.34s.
```

- Now it's time to Go for Authentication using Amazon Cognito-Free Tier (let's use it (;)) , instead of Firebase

## Backend - general idea - TODO

```text
Great! Let's outline a plan to set up your backend using API Gateway, Lambda, FastAPI, DynamoDB, and Cognito. This plan will guide you through the steps to integrate AWS backend services with your MealsToGo React Native app.

Here’s a step-by-step plan:

Phase 1: Backend Setup (AWS Services)

AWS Account and Prerequisites:

Ensure you have an active AWS account. If not, sign up at https://aws.amazon.com/.
Install the AWS Command Line Interface (CLI) on your local machine. Follow the instructions here: https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html.
Configure the AWS CLI with your credentials. Run aws configure in your terminal and enter your AWS Access Key ID, Secret Access Key, default region, and output format.
Make sure you have Python and Node.js installed on your development machine, as we'll be using them for FastAPI and potentially some deployment tools.
Set up DynamoDB:

We'll start by defining the data structure for your MealsToGo app. Let's assume you need to store restaurant information and user data. We can create two DynamoDB tables:
Restaurants Table: To store restaurant details (name, location, menu, etc.).
Users Table: To store user profiles and authentication information (initially, we might rely on Cognito for user profiles, but we can extend this table later if needed).
We will define the attributes and primary keys for these tables.
Set up Amazon Cognito User Pool:

Create a Cognito User Pool to manage user identities. This will handle user registration, login, password management, and potentially multi-factor authentication.
Configure sign-up experience, password policies, and any required attributes for user profiles.
Develop FastAPI Backend Application:

Initialize a new FastAPI project. You can start with a basic structure and then add API endpoints as needed.
Define API endpoints for:
Fetching restaurant listings
Retrieving details for a specific restaurant
User authentication (though Cognito handles most of this, you might have endpoints for custom user logic if needed)
Potentially order placement, user profile updates, etc. (depending on the features you plan to implement).
Implement the logic within your FastAPI endpoints to interact with DynamoDB to fetch and store data. We'll use the AWS SDK for Python (Boto3) to interact with DynamoDB.
For authentication, we'll configure API Gateway to use Cognito for authorization, so FastAPI endpoints will be protected.
Deploy FastAPI Backend to AWS Lambda and API Gateway:

We'll use a serverless deployment tool like AWS Serverless Application Model (SAM) or Zappa to deploy your FastAPI application as a Lambda function. SAM is AWS's native tool and is well-integrated. Zappa is another popular option, especially for deploying WSGI applications like FastAPI to Lambda.
This tool will handle packaging your FastAPI application, deploying it to Lambda, and setting up API Gateway to trigger your Lambda function when API endpoints are hit.
Configure API Gateway:

If the deployment tool doesn't fully configure API Gateway, we'll manually configure API Gateway to:
Create API endpoints that map to your FastAPI application's routes.
Integrate these endpoints with your deployed Lambda function.
Set up a Cognito User Pool Authorizer on API Gateway to secure your API endpoints. This ensures that only authenticated users (with valid tokens from Cognito) can access your backend APIs.
Phase 2: React Native App Integration

Integrate React Native App with Backend APIs:

In your React Native MealsToGo app, you'll need to make HTTP requests to the API Gateway endpoints you created.
For user authentication, you'll use the AWS SDK for JavaScript or AWS Amplify in your React Native app to interact with Cognito. This will handle user sign-up and sign-in, and retrieve authentication tokens.
Include the authentication token in the headers of your API requests to API Gateway. API Gateway will then use the Cognito Authorizer to validate the token before forwarding the request to your Lambda function.
Implement data fetching logic in your React Native app to call your API endpoints and display restaurant data, user profile information, etc.
Testing and Iteration:

Thoroughly test the entire flow: user registration, login, accessing protected API endpoints, data retrieval, and any other features you implement.
Based on testing and your needs, iterate on both the backend (FastAPI, DynamoDB, API Gateway, Cognito) and the frontend (React Native app).
```

### Building backend - aws

- to launch fastapi - `uvicorn main:app --reload` & `curl http://127.0.0.1:8000` & `curl http://127.0.0.1:8000/restaurants`
- Have a look at AWS SAM - & https://docs.aws.amazon.com/whitepapers/latest/aws-overview/mobile-services.html
