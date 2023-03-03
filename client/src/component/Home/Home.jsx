import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import ProductCard from "./ProductCard";
import "./Home.scss";
import MetaData from "../layout/MetaData.jsx";
import { getProduct, clearErrors } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"ECOMMERCE"} />
          <div className="banner">
            <p>Welcome to E commerce</p>
            <h1>Find Amazing products</h1>
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div id="container" className="cartContainer">
            {products &&
              products.map((products, index) => (
                <ProductCard key={index} product={products} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
