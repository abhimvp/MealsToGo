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

## Played around on how stack & Tab Navigation can be done using expo.

- Now i got it - i was confused at the start but now i feel better when i did it step by step ,took time but never mind initial understanding of how things working helps, now i can just go ahead and build the app, documentation is great. went through https://docs.expo.dev/develop/file-based-routing/ & https://docs.expo.dev/router/advanced/tabs/
- When the app loads , it shows the index.tsx file present in (home) & remaining as usual.For this commit & test code - i will upload pictures for my assets/images/reference to get back to this later on what is displayed for what code i have tried.

<img src="assets/images/When app loads Home Tab index tsx.jpg" width="150" /> <img src="assets/images/Home details Stack.jpg" width="150" /> <img src="assets/images/User Tab.jpg" width="150" /> <img src="assets/images/USer details Stack.jpg" width="150" /> <img src="assets/images/Settings Tab.jpg" width="150" /> <img src="assets/images/Test Tab.jpg" width="150" />

- ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
  - ESLint is completely pluggable. Every single rule is a plugin and you can add more at runtime. You can also add community plugins, configurations, and parsers to extend the functionality of ESLint.
  - https://github.com/facebook/react-native/tree/main/packages/eslint-config-react-native
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

C:\Users\abhis\Desktop\ReactNative\projects\MealsToGo\app\(tabs)\(home)\index.tsx
  6:5  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  7:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  8:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope

C:\Users\abhis\Desktop\ReactNative\projects\MealsToGo\app\(tabs)\(user)\_layout.tsx
   5:5  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  16:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  17:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope

C:\Users\abhis\Desktop\ReactNative\projects\MealsToGo\app\(tabs)\(user)\detailsq.tsx
  5:5  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  6:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope

C:\Users\abhis\Desktop\ReactNative\projects\MealsToGo\app\(tabs)\(user)\indexq.tsx
  6:5  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  7:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  8:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope

C:\Users\abhis\Desktop\ReactNative\projects\MealsToGo\app\(tabs)\_layout.tsx
   6:5   error  'React' must be in scope when using JSX  react/react-in-jsx-scope
   7:9   error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  11:40  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  15:7   error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  19:40  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  23:7   error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  27:38  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  30:7   error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  34:38  error  'React' must be in scope when using JSX  react/react-in-jsx-scope

C:\Users\abhis\Desktop\ReactNative\projects\MealsToGo\app\(tabs)\newhome.tsx
  5:5  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  6:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope

C:\Users\abhis\Desktop\ReactNative\projects\MealsToGo\app\(tabs)\settings.tsx
  5:5  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  6:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope

C:\Users\abhis\Desktop\ReactNative\projects\MealsToGo\app\+not-found.tsx
  6:5  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  7:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  8:7  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  9:9  error  'React' must be in scope when using JSX  react/react-in-jsx-scope

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

- Card : https://callstack.github.io/react-native-paper/docs/components/Card/
- styled-components can be used with React Native in the same way and with the same import.https://styled-components.com/docs/basics#react-native - styleSheets are great , but we want more consistency - there's something called DesignOps - when you're building a product , taking into account all of the constraints and making sure that the constraints are fit,picture perfect along the way - a design system - a theme - which gives us consistency `styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.` - so we will move away from StyleSheet syntax and create components having their styling already on it. For example : Also DO `yarn add styled-components`

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
