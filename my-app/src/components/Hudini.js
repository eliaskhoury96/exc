import React, { useState } from 'react';

const Hudini = () => {
    const [show, setShow] = useState(true);

    return (
        <div>
            {show ? <h4>Now you see me</h4> : <h4>Now you don’t</h4>}
        </div>
    );
}



export default Hudini 