import React, { useState } from 'react';//imports React and the 'useState'(manages the state of filter input)
import './ShoeList.css';     //imports CSS styling

const shoesData = [        //This array contains a list of shoe objects, each with an ID, name, $ and description
  {                        //shoe list components below
    id: 1,
    name: 'Nike',
    price: '$89.99',
    description: 'Great athletic shoe for crosstraining'
  },
  {
    id: 2,
    name: 'Fallen Footwear',
    price: '$59.99',
    description: 'A great skate shoe designed by Jamie Thomas himself'
  },
  {
    id: 3,
    name: 'La Sportive-TC Pro',
    price: '$129.99',
    description: 'A great, rigid climbing shoe meant for top roping and crack climbing'
  }
];

const ShoeList = () => { //Data array. Assigns value to the variables below
  const [filterText, setFilterText] = useState(''); 
  //filtertext: state variable initialized as empty string
  //setFilterText: Is a function used to update 'filtertext'   
  const handleInputChange = (event) => { //Function: updates filterText state whenever the input value changes(search bar)
    setFilterText(event.target.value);
  };
  const filteredShoes = shoesData.filter(shoe => 
    /*Filters shoesData array based on filterText. It checks if the shoes name 
    includes the filtertext ignoring case */
    shoe.name.toLowerCase().includes(filterText.toLowerCase()) 
    /*Conditional rendering. filters shoes array based on filterText, converting
     both to lowercase to ensure case-insensitive matching. Allows me to display content based on a condition.*/
  );    

  return ( /*To Render an input field for searching and a list of filtered shoes. If no shoes match the filter, it displays
    ...a message saying 'no shoes found' */
    <div>
      <h1>Daryl's Shoe Emporium</h1>
      <input                              //allows user to type in search text. 
        type="text"
        placeholder="Search for shoes..."
        value={filterText}                //controlled by the filterText state
        onChange={handleInputChange}      //Updates the filterText state whenever you type (real time magic thing)
        className="search-input"
      />
      <ul>
        {filteredShoes.length > 0 ? ( /*i.e. dependency injects <-first mention
        filteredshoes.length(...):(...) Operator/ if-else statement. It checks if
        'filteredshoes.length>0, meaning if there is at least one shoe in the filtered list'*/ 
          filteredShoes.map(shoe => (   /*filteredshoes.map(...):(...). Executes if there are shoes in the 'filteredShoes
          array. map is used to iterate over each shoe object in the 'filteredshoes' array. for each shoe, it returns
          a list item containing the shoe's name,price and descrip.  Each list item is assigned a key prop 
          (key=shoe.id) to help react identify which items have changed, been added or removed*/
            <li key={shoe.id}> 
              <h2>{shoe.name}</h2>
              <p><strong>Price:</strong> {shoe.price}</p>
              <p><strong>Description:</strong> {shoe.description}</p>
            </li>
          ))
        ) : (
          <p>No shoes found. You should just buy Nikes anyway. Do it. Treat yourself</p>     /*if no shoes in the 
          filteredshoes array, it gives this message */
        )}
      </ul>
    </div>
  );
};

export default ShoeList;









    

//<Greeting      name=           "Daryl" />
//Tag ^      attribute name ^     value^