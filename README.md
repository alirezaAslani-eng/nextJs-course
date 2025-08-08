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
a dynamic route is a type of route wich gets parameter from url like this :  `route/dynamicParam` -> `route/product-id`
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