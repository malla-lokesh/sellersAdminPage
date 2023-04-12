import React, { useState } from "react";

const Input = (props) => {
    const [pId, setPId] = useState('');
    const [price, setPrice] = useState('');
    const [pName, setPName] = useState('');
    const [category, setCategory] = useState('choose');

    const pIdHandler = (e) => {
        setPId(e.target.value);
    }

    const priceHandler = (e) => {
        setPrice(e.target.value);
    }

    const pNameHandler = (e) => {
        setPName(e.target.value);
    }

    const categoryHandler = (e) => {
        setCategory(e.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const product = {
            pId: pId,
            price: price,
            pName: pName,
            category: category,
        };
        localStorage.setItem(pId, JSON.stringify(product))
        props.onAddProduct(product);
        setPId('');
        setPrice('');
        setPName('');
        setCategory('choose');
    }
    
    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <label htmlFor="ID">Product ID:</label>
                <input
                    type="number"
                    id="ID"
                    value={pId}
                    onChange={pIdHandler}>
                </input>
                <br />
                <label htmlFor="price">Selling Price:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={priceHandler}>
                </input>
                <br />
                <label htmlFor="pName">Product Name:</label>
                <input
                    type="text"
                    id="pName"
                    value={pName}
                    onChange={pNameHandler}>
                </input>
                <br />
                <label htmlFor="category">Choose a Category:</label>
                <select
                    value={category}
                    onChange={categoryHandler}>
                    <option value="Choose">Choose</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Food">Food</option>
                    <option value="Skincare">Skincare</option>
                </select>
                <br />
                <button className="btn btn-success">Add Product</button>
            </form>
        </React.Fragment>
    );
};

export default Input;