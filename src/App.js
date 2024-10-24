import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import CartPage from './Pages/CartPage';
import ContactPage from './Pages/ContactPage';
import ProductsPage from './Pages/ProductsPage';
import SingleProductPage from './Pages/SingleProductPage';
import NotFoundPage from './Pages/NotFoundPage';
import Header from './Components/HeaderComponent/Header';
import Footer from './Components/FooterComponent/Footer';
import WishListPage from './Pages/WishListPage';
import LoginPage from './Pages/LoginPage';
import SignUp from './Components/LoginComponent/SignUp';
import PrivateRoute from './Utils/PrivateRoute';
import Profile from './Components/ProfileComponent/Profile';
import Order from './Components/OrderComponent/Order';
import AddNewItem from './InventaryManagement/InventoryComponents/AddNewItem';
import DeleteItem from './Components/AdminComponent/DeleteItem';
import EditProfile from './Components/ProfileComponent/EditProfile';
import InventoryDashboard from './InventaryManagement/InventoryComponents/InventoryDashboard';
import UpdateItem from './InventaryManagement/InventoryComponents/UpdateItem';
import InventoryOrderPage from './InventaryManagement/InventoryComponents/InventoryOrderPage';
import Feedback from './Components/FeedbackComponent/Feedback';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/products' element={<ProductsPage />}/>
          <Route path='/singleproduct/:id' element={<SingleProductPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/order' element={<Order />}/>
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/wishlist' element={<WishListPage />}/>
            <Route path='/editprofile/:id' element={<EditProfile />}/>
            <Route path='/additem' element={<AddNewItem />} />
            <Route path='/updateitem/:id' element={<UpdateItem />}/>
            <Route path='/orderdetails' element={<InventoryOrderPage />}/>
            <Route path='/feedback' element={<Feedback />} />
            {/* <Route path='/adminaccess' element={<DeleteItem />}/> */}
            <Route path='/inventory' element={<InventoryDashboard />} />
          </Route>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
