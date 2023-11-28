# tamu-fall-2023-frontend

Welcome to the tamu-fall-2023-frontend plugin!

## Getting started

This Backstage plugin was created for the 2023 American Airlines sponsored Texas A&M capstone. This repository holds the frontend plugin.

After the inital cloning and setup, the frontend plugin requires another set of steps to fully integrate it into the Backstage app.

1. Clone this repository into your backstage root/plugins folder. You'll be able to access it by running `yarn start` in the root directory.

### Integration into the Backstage app

> In the following steps, 'root' will always refer to the root directory of the Backstage app

1. Navigate to the 'root/packages/app/package.json' file and paste `"@internal/plugin-tamu-fall-2023-frontend": "^0.1.0",`, into the dependencies section
2. Navigate to the 'root/packages/app/src/App.tsx' file and paste the following code below the other imports:
```tsx
import { TamuFall2023FrontendPage } from '@internal/plugin-tamu-fall-2023-frontend';
```
3. Within the 'App.tsx' file, add a new Route tag and specify the path for `TamuFall2023FrontendPage`, e.g: 
```tsx
<Route path="/test" element={<TamuFall2023FrontendPage />} />
```
4. Within the 'root/package.json' file, add the following code to the resolution section:
``` json   
"react": "18.2","react-dom": "18.2"
```
5. Within the 'root/app-config.yaml' file, add the following code to the bottom of the file:
```yaml 
pr-tracker-frontend: baseUrl: http://localhost:7007
```
6. Navigate back to the 'root/packages/app/src/App.tsx' file, and paste the following code into createApp function:
 ``` tsx
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
7. Within the 'App.tsx' file, add the following code: 
``` tsx
import { githubAuthApiRef } from '@backstage/core-plugin-api';
```
8. Run `yarn install` from the root backstage directory


> Note: You must run yarn start-backend before running yarn start!

The plugin should now be ready for use!