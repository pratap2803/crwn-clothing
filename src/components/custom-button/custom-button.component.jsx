import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ( { Children, isGoogleSignIn, ...otherProps}) => (
    <button 
    className={ `${isGoogleSignIn ? 'google-sign-in' : ''} 'custom-button'`} 
    { ...otherProps}
     >
        { Children}
    </button>
)

export default CustomButton;