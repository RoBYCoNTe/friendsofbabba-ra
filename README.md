# react-admin Material UI Mini drawer variant layout

I'm a big fan of [react-admin](https://github.com/marmelab/react-admin) and
I've built a simple layout using [Mini drawer variant](https://v4.mui.com/components/drawers/).
The layout has a simple navigation bar and a drawer with a navigation menu and
it can be used as a starting point for your own layout. Any component can be
overridden by using the `layout` prop.

![React-Admin Mini Drawer](docs/demo.gif)

## How To Use

Install the package:

```sh
npm i --save ra-ui-materialui-layout
```

and then you have to import and use it in you react-admin app:

```js
import { Layout } from "ra-ui-materialui-layout";
import { Admin, Resource } from "react-admin";
const App = () => (
  <Admin layout={Layout}>
    <Resource name="..." />
  </Admin>
);
```

The first step is to add some configuration to your resources files. They need
to instruct the layout component on how to render the resource in group of items
inside the drawer. For example, if you want to show `posts` in the drawer under
`Dashboard` group you need to add the following configuration:

```js
export default {
  ...,
  options: { group: "dashboard", roles: ["user"] }
}
```

In this example, the resource will be rendered in the drawer under the `Dashboard`
group and only the user role will be able to see it (`roles` is another option
exposed in this layout that can be helpful to customize resources access).

## Components

### Layout

The `Layout` component follow the same props as the
[react-admin](https://marmelab.com/react-admin/Theming.html#using-a-custom-layout).

You can override components like `AppBar`, `Sidebar` or `Menu` by passing them to
the `layout` as prop, in addition I've added the following props (useful for
the mini drawer):

| Prop name   | Type   | Default     | Description             |
| ----------- | ------ | ----------- | ----------------------- |
| drawerWidth | number | 240         | the width of the drawer |
| appTitle    | string | React-Admin | the title of the app    |
| appSubTitle | string | Material-UI | the subtitle of the app |
| appVersion  | string | 1.0.0       | the version of the app  |

If you want to override them you can do it as follow:

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

### Menu

The menu component has been designed to be fully customizable and you can use it
in many ways. Suppose you want to customize everything withouth use default menu
items and groups:

```js
import { Layout, Menu, MenuGroup, MenuItem } from "ra-ui-materialui-layout";
const CustomMenu = (props) => (
  <Menu {...props} mode="custom">
    <MenuGroup label="My Group">
      <MenuItem label="My Item" />
    </MenuGroup>
  </Menu>
);
```

The `mode` prop can be used to customize the menu. The default menu is a `Menu`
component with `mode="build"` prop, this means that the menu will be built
from the `MenuItem` and `MenuGroup` components generated scanning the resources.
You can also use `mode="custom"` to customize the menu and show what you really
need or `mode="build"` to use the default menu and add your custom items
that will be **placed at the end** of the menu.

### MenuItem

Menu item can be used in many ways, you can use it to redirect users to external
URL like docs or links or you can publish your own custom routes to specific
pages like in this example:

```js
import { Layout, Menu, MenuGroup, MenuItem } from "ra-ui-materialui-layout";
const CustomMenu = (props) => (
  <Menu {...props}>
    <MenuGroup label="Useful Link">
      <MenuItem {...props} href="https://www.google.it" target="_blank" />
      <MenuItem {...props} to="/local-custom-page">
    </MenuGroup>
  </Menu>
)
```

**Remember** that `MenuItem` must be used inside a `MenuGroup` component.
The current version of this library doesn't support nested menus or root items.

### Badges

You can pass a `badge` prop to the `MenuItem` component to show a badge. The `Menu` component accept `badges` props that allows you to customize the badges for all menu items, this prop can be an object of `key`/`value` pairs where the key is the resource name and the value is the badge config.

For every badge you have to provide these props:

- `value`: the badge value
- `color`: the badge color
- `icon`: the badge icon
- `variant`: the badge variant
- `show` (_not required_): a boolean to show or hide the badge

For example, an output badges config can be like this:

```js
{
  posts: {
    value: 10,
    color: "primary",
    icon: "notifications",
    variant: "dot"
  }
}
```

### UserMenu

The `UserMenu` component allows you to customize the user menu (in the top right corner).

## How to contribute

Clone the repository and run `npm run i-all` to install dependencies.
After that, you can start to testing your app running `npm run dev`.
Use playground to test app with your own modifications.
