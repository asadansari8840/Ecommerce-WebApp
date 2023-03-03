import Header from "./component/layout/Header/Header";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search.jsx";
import LoginSignUp from "./component/User/LoginSignUp";
import "./app.scss";
import store from "./store";
import { loadUSer } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import UpdatedProfile from "./component/User/UpdateProfile";
import UpdatedPassword from "./component/User/UpdatePassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import axios from "axios";
import ElementsLayout from "./component/layout/ElementsLayout";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UserList";
import ProductReview from "./component/Admin/ProductReview";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
 
  // window.addEventListener("contextmenu",(e)=> e.preventDefault());

  useEffect(() => {
    getStripeApiKey();
    store.dispatch(loadUSer());
  }, []);

  return (
    <>
      <Router>
        <Header />
        {isAuthenticated && <UserOptions user={user} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/account" element={<Profile />} />{" "}
          {/* Protected routes */}
          <Route path="/me/update" element={<UpdatedProfile />} />{" "}
          {/* Protected routes */}
          <Route
            path="/password/update"
            user={user}
            element={<UpdatedPassword />}
          />{" "}
          {/* Protected routes */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />{" "}
          {/* Protected routes */}
          <Route path="/order/confirm" element={<ConfirmOrder />} />
          {stripeApiKey && (
            <Route
              element={<ElementsLayout stripe={loadStripe(stripeApiKey)} />}
            >
              <Route path="/process/payment" element={<Payment />} />
            </Route>
          )}
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/order/confirm" element={<ConfirmOrder />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          {/* Protected routes */}
          <Route path="/admin/products" element={<ProductList />} />
          {/* Protected routes */}
          <Route path="/admin/product" element={<NewProduct />} />
          {/* Protected routes */}
          <Route path="/admin/product/:id" element={<UpdateProduct />} />
          {/* Protected routes */}
          <Route path="/admin/orders" element={<OrderList />} />
          {/* Protected routes */}
          <Route path="/admin/order/:id" element={<ProcessOrder />} />
          {/* Protected routes */}
          <Route path="/admin/users" element={<UsersList />} />
          {/* Protected routes */}
          <Route path="/admin/user/:id" element={<UpdateUser />} />
          {/* Protected routes */}
          <Route path="/admin/reviews" element={<ProductReview />} />
          {/* Protected routes */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
