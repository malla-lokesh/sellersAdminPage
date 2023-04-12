import React from "react";

const List = (props) => {
    const {items, onDeleteProduct} = props;

    const electronicItems = items.filter((item) => item.category === 'Electronics');
    const foodItems = items.filter((item) => item.category === 'Food');
    const skincareItems = items.filter((item) => item.category === 'Skincare');

    const deleteHandler = (pId) => {
        onDeleteProduct(pId);
    }

    return (
        <React.Fragment>
            <h3>Electronic Items</h3>
            <ul id="electronicItems">
                {
                    electronicItems.map((item) => {
                        return (
                            <li key={item.pId}>
                                {item.pName} - {item.price}
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => deleteHandler(item.pId)}
                                >Delete Product</button>
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Food Items</h3>
            <ul id="foodItems">
                {
                    foodItems.map((item) => {
                        return (
                            <li key={item.pId}>
                                {item.pName} - {item.price}
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => deleteHandler(item.pId)}
                                >Delete Product</button>
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Skincare Items</h3>
            <ul id="skincareItems">
                {
                    skincareItems.map((item) => {
                        return (
                            <li key={item.pId}>
                                {item.pName} - {item.price}
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => deleteHandler(item.pId)}
                                >Delete Product</button>
                            </li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    );
};

export default List;