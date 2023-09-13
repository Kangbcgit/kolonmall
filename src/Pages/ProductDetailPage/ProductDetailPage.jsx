import React, { useEffect, useState } from 'react'
import ProductBox from '../../Component/ProductBox/ProductBox'
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import ProductDetail from '../../Component/ProductDetail/ProductDetail';

function ProductDetailPage(props) {
  const params = useParams();
  const [data, setData] = useState(null);
  const [detailItem, setDetailItem] = useState();
  useEffect(() => {
    setData(props.data);
  }, [props.data]);
  useEffect(() => {
    for(const key in data) {
      if (key === params.id) {
        console.log(data[key]);
        setDetailItem(data[key]);
        return;
      }
    }
  }, [data]);


  
  return (
    <ProductDetail data={detailItem} />
  )
}

export default ProductDetailPage