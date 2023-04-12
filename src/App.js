import { useState } from 'react';
import Input from './components/Input';
import List from './components/List';

function App() {
  const [products, setProducts] = useState([]);

  const addProductHandler = (product) => {
    setProducts([...products, product])
  }

  const deleteProductHandler = (pId) => {
    setProducts(products.filter((product) => product.pId !== pId));
    localStorage.removeItem(pId);
  }

  return (
    <div className="App">
      <Input onAddProduct={addProductHandler}></Input>
      <br />
      <h2>Products</h2>
      <br />
      <List items={products} onDeleteProduct={deleteProductHandler}></List>
    </div>
  );
}

export default App;
