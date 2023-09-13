import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 1380px;
  height: fit-content;
  margin: 0 auto;
  border: 1px solid skyblue;
`;
const LeftItems = styled.div`
  display: flex;
  gap: 15px;
  border: 1px solid red;
`;
const WrapImg = styled.div`
  width: 422px;
  height: 633px;
  overflow: hidden;
  &>img {
    &.left {
      transform-origin: ${props => props.target === 'right' ? (props.over ? (`${props.x}px ${props.y}px`) : '0px') : 'none'};
      transform: ${props => props.target === 'right' ? (props.over ? 'scale(2.2)' : 'none') : 'none'};
    }
    &.right {
      transform-origin: ${props => props.target === 'left' ? (props.over ? (`${props.x}px ${props.y}px`) : '0px') : 'none'};
      transform: ${props => props.target === 'left' ? (props.over ? 'scale(2.2)' : 'none') : 'none'};
    }
  }
`;
const RightItems = styled.div`
  
`;

function ProductDetail(props) {
  let location = 0;
  let leftLocation = 0;
  let topLocation = 0;
  const [load, setLoad] = useState(false);
  const [data, setData] = useState(null);
  const [over, setOver] = useState(false);
  const [transform, setTransform] = useState({});
  const [target, setTarget] = useState();
  const leftWrap = useRef(null);
  const rightWrap = useRef(null);
  const overMouse = e => {
    if (load === false) return;
    if (e.currentTarget === leftWrap.current) {
      rightWrap.current.firstChild.setAttribute('src', data.frontImg);
      setTarget('left');
    } else if (e.currentTarget === rightWrap.current) {
      leftWrap.current.firstChild.setAttribute('src', data.backImg);
      setTarget('right');
    }
    setOver(true);
  }
  const outMouse = e => {
    if (load === false) return;
    if (e.currentTarget === leftWrap.current) {
      rightWrap.current.firstChild.setAttribute('src', data.backImg);
    } else if (e.currentTarget === rightWrap.current) {
      leftWrap.current.firstChild.setAttribute('src', data.frontImg);
    }
    setOver(false);
  }
  const mouseMove = e => {
    if (load === false) return;
    if (e.currentTarget === leftWrap.current) {
      location = leftWrap.current.getBoundingClientRect();
      leftLocation = location.left;
      topLocation = location.top;
      setTransform(({x: e.pageX - leftLocation, y: e.pageY - topLocation - window.scrollY}));
    } else if (e.currentTarget === rightWrap.current) {
      location = rightWrap.current.getBoundingClientRect();
      leftLocation = location.left;
      topLocation = location.top;
      setTransform(({x: e.pageX - leftLocation, y: e.pageY - topLocation - window.scrollY}));
    }
  }
  useEffect(() => {
    setLoad(true);
  }, []);
  useEffect(() => {
    setData(props.data);
  }, [props.data])
  return (
    
    <>
      {data ? (
        <Wrapper>
          <LeftItems>
            <WrapImg ref={leftWrap} onMouseOver={overMouse} onMouseOut={outMouse} onMouseMove={mouseMove} target={target} x={transform.x ? transform.x : 0} y={transform.y ? transform.y : 0} over={over}>
              {data !== null ? <img className='left' src={data.frontImg} alt="" /> : null}
            </WrapImg>
            <WrapImg ref={rightWrap} onMouseOver={overMouse} onMouseOut={outMouse} onMouseMove={mouseMove} target={target} x={transform.x ? transform.x : 0} y={transform.y ? transform.y : 0} over={over}>
              {data !== null ? <img className='right' src={data.backImg} alt="" /> : null}
            </WrapImg>
          </LeftItems>
          <RightItems>

          </RightItems>
        </Wrapper>
      ) : null}
    </>
  )
}

export default ProductDetail