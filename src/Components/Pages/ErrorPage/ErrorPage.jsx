import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
        <div className='m-10 flex flex-col items-center justify-center'>
            <img className='w-1/2' src="https://i.ibb.co/XJSBFP8/20602785-6325254.jpg" alt="" />
            
        <button className='btn btn-ghost text-xl font-bold'>
            <Link to='/'>Back To Home</Link>
        </button>
        </div>
        </>
    );
};

export default ErrorPage;