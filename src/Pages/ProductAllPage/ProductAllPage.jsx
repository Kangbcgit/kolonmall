import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import ProductDetail from '../ProductDetailPage/ProductDetailPage';
import ProductBox from '../../Component/ProductBox/ProductBox';
import { styled } from 'styled-components';
import { media } from '../../styles/GlobalStyle';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import productAction from '../../Redux/product/action';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-items: center;

  width: 1603px;
  margin-left: auto;
  
  @media ${media.tablet} {
    grid-template-columns: repeat(2, auto);
  }
  @media ${media.mobile} {
    grid-template-columns: repeat(2, auto);
  }
`;

function ProductAllPage(props) {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const productList = useSelector(state => {
    console.log('state: ', state);
    return state.productList;
  });
  const [query] = useSearchParams();
  const dispatch = useDispatch();
  const getProduct = async () => {
    let searchQuery = query.get('q') || '';
    dispatch(productAction.getProduct(searchQuery));
  }
  useEffect(() => {
    getProduct();
  }, [])
  useEffect(() => {
    console.log('hello:',productList)
  }, [productList])
  useEffect(() => {
    setData(props.data);
  }, [props.data]);
  /* useEffect(() => {
    // JSON 파일의 경로
    const jsonFilePath = `http://localhost:3000/products/`;

    // JSON 파일을 가져오는 함수
    const fetchJsonData = async () => {
      try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
          throw new Error('Failed to fetch JSON data');
        }
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchJsonData();
  }, []); // useEffect를 한 번만 실행하도록 빈 배열을 전달
  */

  // const {id} = useParams();
  // console.log('params: ' + id);
  return (
    <Wrapper>
      { productList !== [] ?
        (productList.map((item, index) => {
          return (
            <ProductBox data={item} click={() => {
              navigate(`/ProductDetailPage/${index}`, { state: {index: index} });
            }}></ProductBox>
          );
        })) : (data.map((item, index) => {
          return (
            <ProductBox data={item} click={() => {
              navigate(`/ProductDetailPage/${index}`, { state: {index: index} });
            }}></ProductBox>
          );
        }))
      }
    </Wrapper>
  )
}

export default ProductAllPage