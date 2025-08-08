## router
`nextjs router` is based on file system and we don't need to install a dependency like `react-router-dom` so the `pages folder` is the root of our website and `index.jsx` is the main page, for example if you wirte this address in url `localhost:3000` it starts to load `index.jsx` so for other pages like `InfoPage.jsx` or `Products.jsx` you have to write their specific name in url for example if you have a page like pages/Products.jsx you need a url address like this `localhost:3000/Products`
```bash
directory : 
pages/index.jsx = localhost:3000/
pages/InfoPage.jsx = localhost:3000/InfoPage
```