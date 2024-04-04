
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LayoutAdmin from './components/LayoutAdmin'
import ProductList from './components/ProductList'
import Signup from './components/Signup'
import Signin from './components/Signin'
import ProductAdd from './components/ProductAdd'
import ProductEdit from './components/ProductEdit'
import LayoutWebsite from './components/LayoutWebsite'
import HomePage from './components/HomePage'
import Contact from './components/Contact'
import ProductDetailPage from './components/ProductDetailPage'
import ProductPage from './components/ProductPage'
import About from './components/About'

function App() {


  return <>
    <Routes>
      <Route path='admin' element={<LayoutAdmin />} >
        <Route index element={<ProductList />} />
        <Route path='products' element={<ProductList />} />
        <Route path='products/add' element={<ProductAdd />} />
        <Route path='products/:id/edit' element={<ProductEdit />} />

      </Route>

      <Route path='signup' element={<Signup />} />
      <Route path='signin' element={<Signin />} />

    </Routes>
    <Routes>
    <Route path='/' element={<LayoutWebsite/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/detailproduct' element={<ProductDetailPage/>}/>
        <Route path='/about' element={<About/>}/>

      </Route>
    </Routes>
  </>

}

export default App
