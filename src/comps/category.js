import React from 'react';
import { Link } from 'react-router-dom';

function Category(props){

     const category="Mobiles"

    if("placeholder" in props){
        return(
            <Link to="/sellForm" className="category-list-link">
                            <li>
                            <span className="start-logo"><i class="fa fa-mobile" aria-hidden="true"></i></span>
                            <span className="category-list-title">{category}</span>
                            <span className="end-logo"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                            </li>
                            </Link>
        )
    }
    
}

export default Category;