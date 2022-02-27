# RA MaterialUI Layout

I'm a fan of react-admin and I've built a simple layout using MaterialUI Mini Drawer.

## How to use

```sh
npm i --save ra-ui-materialui-layout
```

In your app:

```js
import { Layout } from 'ra-ui-materialui-layout';
import { Admin, Resource } from 'react-admin';
...
const App = () => (
	<Admin layout={Layout}>
		...
	</Admin>
)
```

## TODO

---

- badge management
- user menu personalization
- documentation
