import React from 'react';
import './List.css';

const List = (props) => {
  const{name, price} =props.product;
    return (
        <div className="item">
            <h3>Subject name: {name}</h3>
            <h4>Price: {price} taka</h4>
            <br/>
            <button className='mainButton'
             onClick={()=>props.handleAddProduct(props.product)}>Enroll now</button>
        </div>
    );
};

export default List;