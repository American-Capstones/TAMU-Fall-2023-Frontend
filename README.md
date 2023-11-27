# tamu-fall-2023-frontend

Welcome to the tamu-fall-2023-frontend plugin!

_This plugin was created through the Backstage CLI_

## Getting started

Your plugin has been added to the example app in this repository, meaning you'll be able to access it by running `yarn start` in the root directory, and then navigating to [/tamu-fall-2023-frontend](http://localhost:3000/tamu-fall-2023-frontend).

You can also serve the plugin in isolation by running `yarn start` in the plugin directory.
This method of serving the plugin provides quicker iteration speed and a faster startup and hot reloads.
It is only meant for local development, and the setup for it can be found inside the [/dev](./dev) directory.


Setup:
 * Clone the repository into root/packages/plugins
 * Navigate to packages/app/package.json and paste ```"@internal/plugin-tamu-fall-2023-frontend": "^0.1.0",``` into the dependencies section
 * Navigate to packages/app/src/App.tsx and paste ```import { TamuFall2023FrontendPage } from '@internal/plugin-tamu-fall-2023-frontend';``` below the other imports
 * Within App.tsx add a new Route tag and specify path for TamuFall2023FrontendPage, e.g. ```<Route path="/test" element={<TamuFall2023FrontendPage />} />```
 * Within the root directory package.json, add ```    "react": "18.2","react-dom": "18.2"``` to the resolution section
 * Within the root directory's app-config.yaml, add ```pr-tracker-frontend: baseUrl: http://localhost:7007``` to the bottom of the file
 * Within the App.tsx file, paste the following code into createApp function
 ```
 components: {
    SignInPage: props => (
      <SignInPage
        {...props}
        auto
        provider={{
          id: 'github-auth-provider',
          title: 'GitHub',
          message: 'Sign in using GitHub',
          apiRef: githubAuthApiRef,
        }}
      />
    ),
  },
 ```
 * Add the following line of code ```import { githubAuthApiRef } from '@backstage/core-plugin-api';``` within the App.tsx file
 * Run ```yarn install``` from the root backstage directory
 * 
 * 
 * 



General Setup:
 * You must run yarn start-backend before running yarn start