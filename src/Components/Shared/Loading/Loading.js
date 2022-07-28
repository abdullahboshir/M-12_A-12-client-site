import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height: "500px"}} className='d-flex justify-content-center align-items-center w-100'>
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;