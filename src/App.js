import { Login } from './pages/Login';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { AddProduct } from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import { GetProduct } from './pages/GetProduct';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/addProduct' element={<AddProduct/>}></Route>
      <Route path='/editProduct' element={<EditProduct/>}></Route>
      <Route path='/getProduct' element={<GetProduct/>}></Route>
    </Routes>
  );
}

export default App;
