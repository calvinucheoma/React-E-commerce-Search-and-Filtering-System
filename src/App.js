import { useState } from 'react';
import { Nav, Products, Recommended, Sidebar } from './sections';
import products from './db/data';
import Card from './components/Card';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('');

  // INPUT FILTER

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    // the indexOf method returns the index of the first occurrence of the specified value in a string. If the specified value is not found, it returns -1.
    // Example, given a query of 'phones' and a product.title of 'Headphones', the indexOf(query) would be Headphones 5 as the 'phone' in 'Headphones' starts at index 5
  );

  // RADIO FILTER
  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // BUTTONS FILTER
  const handleButtonClick = (e) => {
    setSelectedCategory(e.target.value);
    setActive(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleButtonClick={handleButtonClick} active={active} />
      <Products result={result} />
    </>
  );
}

export default App;
