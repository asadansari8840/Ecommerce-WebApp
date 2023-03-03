import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./Search.scss";
import MetaData from "../layout/MetaData";
const Search = () => {

    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`)
        }else{
            navigate("/products");
        }
    }
    return (
        <>
        <MetaData title="Search your product --Ecommerce"/>
            <form onSubmit={searchSubmitHandler} className="searchBox">
                <input
                    type="text"
                    placeholder="Search any product ...."
                    onChange={(e) => setKeyword(e.target.value.trim())}
                />
                <input type="submit" value="Search" />
            </form>
        </>
    );
};

export default Search;
