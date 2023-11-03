import './App.css';
import AddingProduct from './Pages/AddingProduct';
import HomePage from './Pages/HomePage';
import ProductList from './Pages/ProductList';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
<>



<div >
<ul style={{display:'flex', justifyContent:'space-evenly'}}>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/productlist'>Product List</Link></li>
    <li><Link to='/add'>Add Product</Link></li>

</ul>
</div>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/productlist' element={<ProductList/>} />
        <Route path='/add' element={<AddingProduct/>} />

    </Routes>

</>
  );
}

export default App;
