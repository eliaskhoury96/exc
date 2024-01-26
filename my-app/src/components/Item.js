import React from 'react';

const Item = ({item , price}) => {
    return (
        <div>
          <div>Item:{item}</div>
          <div>Price:{price}</div>
        </div>
    );
}



export default Item;