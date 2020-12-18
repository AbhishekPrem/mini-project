import React from 'react';
import './styles.css';

const Buttons = ({children, ...otherProps}) => {
    return(
        <button className="btn" {...otherProps}>
            {children}
        </button>
    )
}

export default Buttons;