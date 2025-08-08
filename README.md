## router

`nextjs router` is based on file system and we don't need to install a dependency like `react-router-dom` so the `pages folder` is the root of our website and `index.jsx` is the main page, for example if you wirte this address in url `localhost:3000` it starts to load `index.jsx` so for other pages like `InfoPage.jsx` or `Products.jsx` you have to write their specific name in url for example if you have a page like pages/Products.jsx you need a url address like this `localhost:3000/Products`

```bash
directory :
pages/index.jsx = localhost:3000/
pages/InfoPage.jsx = localhost:3000/InfoPage
```

### nested routes

```bash
directory :
pages/user-panel/index.jsx = localhost:3000/user-panel
pages/user-panel/orders.jsx = localhost:3000/user-panel/orders
```

### dynamic routes

a dynamic route is a type of route wich gets parameter from url like this : `route/dynamicParam` -> `route/product-id`
dynamic routes in next.js are known as a file like this -> `[dynamicParam].jsx / [dynamicParam].js`
for example in this architecture we have a nested route as a folder and an index file :

```
pages
|
|__article/
   |
   |__index.jsx
|
|
```

and we added a dynamic route in a nested route .
so in this case our nested route has a dynamic route if we write anything after this addres -> `locallhost:3000/article` like this `locallhost:3000/article/12`, we will navigate to a dynamic route .

```
pages
|
|__article/
   |
   |__index.jsx
   |
   |__[id].jsx
|
|
```

### using parameter in dynamic route

this hook `useRouter()` provides details about a route if it's calld in that, so we can access to dynamic parameter by using `query property` from output of this hook like below :

```jsx
import { useRouter } from "next/router";
function OneArticle() {
  const {
    query: { id }, // here i got id because i created a dynamic route with a (id parameter) like this [id].js
  } = useRouter();
  return <div>show data base on this id {id}</div>;
}
```

### nested dynamic routes

we also can add a dynamic nested as second nested route .
so look at this addrees structure `localhost:3000/admin/[admin-id]/notification` or `localhost:3000/admin/[admin-id]/me` !

- here we have a nested route :

```
pages
|
|__admin/
|
|
```

- and second `nested dynamic route` :
- here `[admin_id]` is a folder as child nested route !

```
pages
|
|__admin/
   |
   |__[admin_id]/
|
|
```

and `notification.jsx` or `me.jsx` are static child routes in `[admin_id]/` so they can access to `[admin_id]` parameter

```
pages
|
|__admin/
   |
   |__[admin_id]/
      |
      |-notification.jsx
      |-me.jsx
|
|
```

```jsx
function notfication() {
  const {
    query: { admin_id },
  } = useRouter();

  return <div>notfication for admin with id : {admin_id}</div>;
}
function me() {
  const {
    query: { admin_id },
  } = useRouter();
  return <div>this is my id : {admin_id}</div>;
}
```

### access to parent route parameter by query propertiey

if you have a complex route architecture and you need to access to older parents .

for example the dynamic route `[pj_id].jsx` needs to access prameter of `[admin_id]` .
```
pages
|
|__admin/
   |
   |__[admin_id]/
      |
      |___projects/
      |   |-index.jsx
      |   |-[pj_id].jsx
      |
      |-notification.jsx
      |-me.jsx
|
```

`[pj_id].jsx` : so this dynamic route able to access to its self and its parent and older parents like `[admin_id]` by using :

```js
  const {
    query: { admin_id, pj_id },
  } = useRouter();
```

