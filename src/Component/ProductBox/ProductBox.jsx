import React from 'react'
import { styled } from 'styled-components';

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;

  margin: 0 auto;
  cursor: pointer;
  &>img:nth-of-type(1) {
    
  }
  &>img:nth-of-type(2) {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity .5s;
    &:hover {
      opacity: 1;
    }
  }
  &>div {
    position: absolute;
    left: 0;
    top: 0;
    width: fit-content;
    height: fit-content;
    padding: 5px 10px;
    background: orange;
    color: #fff;
  }
`;

function ProductBox(props) {
  return (
    <Box onClick={props?.click}> 
      <img src={props?.data?.frontImg} alt="" />
      <img src={props?.data?.backImg} alt="" />
      <h4>{props?.data?.title}</h4>
      <h2>{props?.data?.price}원</h2>
      <div>{props?.data?.tag}</div>
    </Box>
  )
}

export default ProductBox