import React from 'react';
import ShopMen from './../../assets/ShopMen.jpg';
import ShopWomen from './../../assets/ShopWomen.jpg';
import './styles.css';
//import obj from './data.js';

const Directory = props =>{
    return(
        <div className="directory">
            <div className="wrap">
            <div
                className="item"
                style={{
                    backgroundImage: `url(${ShopMen})`
                }}
            >
                <a>
                    Shop Men
                </a>
            </div>
            <div 
                className="item"
                style={{
                    backgroundImage: `url(${ShopWomen})`
                }}
            >
                <a>
                    Shop Women
                </a>
            </div>
            </div>
        </div>
    )
}

export default Directory;