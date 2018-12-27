# Next.js example with Material UI

## How to use

Install it and run:

```sh
npm install
npm run dev
# or
yarn
yarn dev
```

## Dynamic Routes for Next.js

Named routes with [next-routes](https://github.com/fridays/next-routes/)

 - [`routes.js`](./static/routes.js) defines named routes and parameters
 - [`pages/profile.js`](./pages/profile.js) fetch async data based on url parameters


```javascript
const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('about')                                       // about  about     /about
.add('user', '/user/:id', 'profile')                // user   profile   /user/:id
```

This file is used both on the server and the client.

The page component receives the matched URL parameters merged into `query`

```javascript
export default class Blog extends React.Component {
  static async getInitialProps ({query}) {
    // query.id
  }
  render () {
    // this.props.url.query.id
  }
}
```
