# react-admin Material UI Mini drawer variant layout

I'm a big fan of [react-admin](https://github.com/marmelab/react-admin) and I've built a simple layout using [Material UI Mini drawer variant](https://v4.mui.com/components/drawers/) as you can see in this example:

![React-Admin Mini Drawer](docs/demo.gif)

## How To Use

Install the package:

```sh
npm i --save ra-ui-materialui-layout
```

And then you have to import and use it in you react-admin app:

```js
import { Layout } from "ra-ui-materialui-layout";
import { Admin, Resource } from "react-admin";
const App = () => (
  <Admin layout={Layout}>
    <Resource name="..." />
  </Admin>
);
```

## Props

Let's start saying that this component is a wrapper for react-admin layout component
and support the same documented options described in
[react-admin documentation](https://marmelab.com/react-admin/Theming.html#using-a-custom-layout).

For this reason, instead of using the props described below, you can override
components like `AppBar`, `Sidebar` or `Menu` by passing them to the `layout` as prop
(as react-admin explain in his documentation linked before).

In addition I've added the following props (useful for the mini drawer):

| Prop name   | Type   | Default       | Description             |
| ----------- | ------ | ------------- | ----------------------- |
| drawerWidth | number | 240           | the width of the drawer |
| appTitle    | string | 'React-Admin' | the title of the app    |
| appSubTitle | string | 'Material-UI' | the subtitle of the app |
| appVersion  | string | '1.0.0'       | the version of the app  |

Supposing you want to just overwrite them, you can create your layout copy and
override the props you want to change.

```js
import { Layout } from "ra-ui-materialui-layout";
import { Admin, Resource } from "react-admin";
const MyLayout = (props) => (
  <Layout
    {...props}
    drawerWidth={300}
    appTitle="My App"
    appSubTitle="My Subtitle"
  />
);
const App = () => (
  <Admin layout={MyLayout}>
    <Resource name="..." />
  </Admin>
);
```

## How to contribute

Clone the repository and run `npm run i-all` to install dependencies.
After that, you can start to testing your app running `npm run dev`.
Use playground to test app with your own modifications.
