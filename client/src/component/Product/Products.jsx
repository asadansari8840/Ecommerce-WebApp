import React, { useEffect, useState } from 'react';
import "./Products.scss";
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from '../../actions/productAction';
import Loader from '../layout/Loader/Loader';
import ProductCard from '../Home/ProductCard';
import Pagination from "react-js-pagination";
import Typography from "@mui/material/Typography";
import { Slider } from "@mui/material";
import {useAlert} from "react-alert"
import MetaData from '../layout/MetaData';

const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "Mobile",
]

const Products = () => {
    const params = useParams();
    const alert = useAlert();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 25000]);
    const [category, setCategory] = useState("")
    const [ratings, setRatings] = useState(0);
    const { loading, error, products, productsCount, resultPerPage, filteredProductsCount } = useSelector((state) => state.products);
    const keyword = params
    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    }
    const priceHandler = (e, newPrice) => {
        setPrice(newPrice)
    }
    useEffect(() => {
        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getProduct(keyword.keyword, currentPage, price,category,ratings))
    }, [dispatch, keyword, currentPage, price ,category,ratings,alert,error])
    let count = filteredProductsCount;
    return (
        <>
            {loading ? <Loader /> :
                <> 
                <MetaData title="Products -- Ecommerce Website"/>
                    <h2 className='productsHeading'>Products</h2>
                    <div className="products">
                        {products && products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>

                    <div className="filterBox">
                        <Typography>Price</Typography>
                        <Slider
                            value={price}
                            onChange={priceHandler}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            min={0}
                            max={25000}
                        />
                        <Typography>Categories</Typography>
                        <ul className='categoryBox'>
                            {categories.map((category) => (
                                <li
                                    className='category-link'
                                    key={category}
                                    onClick={() => setCategory(category)}
                                >
                                 {category}
                                </li>
                            ))}
                        </ul>
                        <fieldset>
                             <Typography component="legend">Ratings Above</Typography>
                             <Slider 
                                value={ratings}
                                onChange={(e,newRating)=>{
                                    setRatings(newRating)
                                }}
                                valueLabelDisplay="auto"
                                aria-labelledby="continuos-slider"
                                min={0}
                                max={5}
                             />
                        </fieldset>
                    </div>

                    {resultPerPage < count && (
                        <div className="paginationBox">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resultPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText="Next"
                                prevPageText="Prev"
                                firstPageText="1st"
                                lastPageText="Last"
                                itemClass="page-item"
                                linkClass='page-link'
                                activeClass='pageItemActive'
                                activeLinkClass='pageLinkActive'
                            />
                        </div>
                    )}

                </>
            }
        </>
    )
}

export default Products;