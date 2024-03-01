# Movie Verse Browser App

## Bootstrap installieren und implementieren

https://react-bootstrap.netlify.app/docs/getting-started/introduction

```bash
npm install react-bootstrap bootstrap
```

### Bootstrap CSS

```js
  /* The following line can be included in your src/index.js or App.js file */

import 'bootstrap/dist/css/bootstrap.min.css';
```

### Api Key

```js
url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${
      import.meta.env.VITE_API_KEY
    }`;
```