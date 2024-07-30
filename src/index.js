//Homework: Mimick what we've done and use 'shoes' as the default.  Needs a parent/child, a form and a list.   
//Include type, description and price.   

import React from 'react';  //imports react library (not directly used in index.js but needed for JSX export)
import ReactDOM from 'react-dom/client'; /*imports package which gives the methods needed to interact with DOM.
specifically craeteRoot (used to create a root for rendering react components into the DOM)*/
import './index.css'; //applies global styles to the app.
import App from './App';     //imports

const root = ReactDOM.createRoot(document.getElementById('root'));  
/* document.getElementbyID= Retrieves DOM element 'root'. This is where the tree is attached. Function. const root 
Needed for DOM to work.
   reactdom.createroot = creates a root for rendering the react app.*/ 
root.render(    /*renders react component tree into the DOM element (id root) 
  react.strictmode=Wrapper provided by React. Helps detect problems. Doesn't effect build
  app/>= root component of my app. Will be rendered with a strict mode wrapper  */                                                    
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


