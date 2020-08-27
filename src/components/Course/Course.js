import React, { useState } from 'react';
import './Course.css';
import courses from'../../courses';
import List from '../List/List';
import Cart from '../Cart/Cart';

const Course = () => {
    const course12 = courses;
    const [course, setCourse] = useState(course12);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (ppppp)=>{
        console.log('product added.',ppppp);
        const newCart = [...cart, ppppp];
        setCart(newCart);
    }

    return (
    
        <div class="row">
            <div class="col-8">
             {
                 course.map(c=><List handleAddProduct = {handleAddProduct}
                product={c}></List>)
             }
                </div>
                
            <div class="col-4 new">
            <div class="position-fixed">
            <Cart cart={cart}></Cart>
                </div>
                </div>
        </div>
            
      
    );
};

export default Course;