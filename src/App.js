// Step: modify this App.js file to include the ShoeList component.
// This file imports the shoe list         
import logo from './logo.svg'; //Question: can I add an 'assetts' file to SRC to add my own photos?
import './App.css';            //Applies styling to app content
import ShoeList from './ShoeList';    /*imports from ShoeList.js. Needed to 'define' shoe list. Tag. Allows 'app'
(component) to use the 'shoeList' component, rendering JSX  */

function App() {               /*Defines the function component 'app'. (Functional component is a JS function that
  returns JSX, then html) */
  return (            /*Constructor.Statement where I specify what JSX will be rendered. In this case, a DIV element  
    named app. Reminder: always use className vs standard div class.   Below: shoelist-where it will appear.*/
    <div className="App" input type="text">          
      <ShoeList />                  
    </div>
  );
}
export default App; /*exports 'app' component as the default export from this file. Allows index.js, etc to import
and use the 'app' component*/

//I wasn't sure about line 12. I nested typetext into the div but couldn't separate it without breaking. 