import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';

function ScrollToTop(){
    const localtion = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [location.pathname])
}

export default ScrollToTop;