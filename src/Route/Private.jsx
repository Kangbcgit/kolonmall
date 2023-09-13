import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import ProductDetailPage from '../Pages/ProductDetailPage/ProductDetailPage';

function Private(props) {
  const [authenicate, setAuthenicate] = useState(props.authenicate);
  const location = useLocation();
  const productIndex = location?.state?.index;
  useEffect(() => {
    setAuthenicate(props.authenicate);
  }, [props.authenicate]);
  return authenicate === true ? (<ProductDetailPage data={props.data}/>) : (<Navigate to='/Login' state={{path: `/ProductDetailPage/${productIndex}`}} />);
}

export default Private