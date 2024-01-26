import React from 'react';
import Item from './Item';

const Home = ({store,shouldDiscount}) => {
    return (
        <div>
            {store.map((item,index)=>(
              <Item key={index} item={item.item} price={shouldDiscount ? item.price * (1 - item.discount) : item.price} />
            ))}
        </div>
    );
}
export default Home;