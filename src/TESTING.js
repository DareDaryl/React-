
import React, { useState } from 'react'; //imports Reace and the 'useState' hook from the reat library (to manage state)
import './ShoeList.css';                 //imports CSS styling

const shoesData = [               //This array contains a list of shoe objcets, each with an ID, name, $ and description
  {                               //shoe list components below
    id: 1,
    name: 'Running Shoes',
    price: '$89.99',
    description: 'Comfortable and durable running shoes perfect for daily workouts.'
  },
  {
    id: 2,
    name: 'Sneakers',
    price: '$59.99',
    description: 'Casual sneakers that are stylish and versatile for everyday wear.'
  },
  {
    id: 3,
    name: 'Boots',
    price: '$129.99',
    description: 'Sturdy boots designed for rugged terrains and cold weather.'
  }
];

const ShoeList = () => {
  const [filterText, setFilterText] = useState(''); //initializes the state variable 'filtertext' with an empty string.
  //SeFilterText is a function used to update FilterText
  const handleInputChange = (event) => { //Function: updates filterText state whenever the input value changes 
    setFilterText(event.target.value);
  };
  const filteredShoes = shoesData.filter(shoe => /*Filters shoesData array based on filterText. It checks if the shoes name 
    includes the filtertext ignoring case */
    shoe.name.toLowerCase().includes(filterText.toLowerCase())
  );      //add state to manage the filter text and update the rendering logic to filter the shoes based on the input

  return ( /*To Render an input field for searching and a list of filtered shoes. If no shoes match the filter, it displays
    ...a message saying 'no shoes found' */
    <div>
      <h1>Shoe Store</h1>
      <input
        type="text"
        placeholder="Search for shoes..."
        value={filterText}
        onChange={handleInputChange}
        className="search-input"
      />
      <ul>
        {filteredShoes.length > 0 ? (
          filteredShoes.map(shoe => (
            <li key={shoe.id}>
              <h2>{shoe.name}</h2>
              <p><strong>Price:</strong> {shoe.price}</p>
              <p><strong>Description:</strong> {shoe.description}</p>
            </li>
          ))
        ) : (
          <p>No shoes found</p>
        )}
      </ul>
    </div>
  );
};

export default ShoeList;
