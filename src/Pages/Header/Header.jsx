import React, { useState } from 'react'
import { styled } from 'styled-components';
import { Inner, Wrapper, media } from '../../styles/GlobalStyle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
//header 내부 재사용 컴포넌트
const Floor = styled.div`
  /* border: 1px solid green; */
  height: 95px;
`;
const PersonalLink = styled(Link)``;
//Wrapper는 GlobalStyle에서 가져옴.
const FrameHeader = styled(Inner)`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;
const SectionTop = styled(Floor)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${media.tablet} {
    flex-direction: column;
    gap: 20px;

    height: auto;
  }
`;
const WrapLogo = styled(Link)`
  width: 299px;
  height: 54px;
  /* border: 1px solid #000; */
`;
const Search = styled.div`
  position: relative;
  width: 420px;
  height: 31px;
  &>form {
    height: 100%;
    &>input {
      width: 100%;
      height: 100%;
      border:none;
      border-bottom: 1px solid #000;
      &:focus {
        outline: none;
      }
    }
    &>button {
      position: absolute;
      right: 0;
      width: 30px;
      height: 30px;
      &>img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      background: none;
      border: none;
      cursor: pointer;
    }
  }
`;
const PersonalMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PersonalService = styled(PersonalLink)`
  height: 18px;
  padding: 0 11px;
  &.PersonalServiceFirstElement {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -1px;
      transform: translateY(-50%);
      width: 1px;
      height: 12px;
      background: gray;
    }
  }
  &.PersonalServiceLastElement {
    width: fit-content;
    height: fit-content;
    &>div {
      width: 18px;
      height: 18px;
      &>img {
        position: relative;
        bottom: 12px;
        width: 30px;
        height: 30px;
        object-fit: cover;
      }
    }
  }
`;

const SectionBottom = styled(Floor)`
  display: flex;
  align-items: center;

  @media ${media.tablet} {
    justify-content: center;
  }
`;
//bottom
const Gnb = styled.div`
  display: flex;
  justify-content: space-between;

  width: 570px;
`;
const GnbLink = styled(Link)`
  font-size: 18px;
  font-weight: 300;
  color: #AAA;
  &.selected {
    position: relative;
    color: #000;
    &::after {
      opacity: 1;
      /* transition: .4s opacity; */
    }
  }
  &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 120%;
      transform: translateX(-50%);
      width: 3px;
      height: 3px;
      border-radius: 5px;
      background: #000;
      opacity: 0;
      pointer-events: none;
    }
`;


function Header(props) {
  // useLocation 훅을 사용하여 현재 라우터의 경로 정보를 가져옴
  const location = useLocation();
  // location.pathname을 사용하여 현재 경로를 가져올 수 있음
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [selectLink, setSelectLink ] = useState(null);
  
  // const LinkClick = index => {
  //   setSelectLink(index);
  // }

  const onCheckEnter = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      let keyword = e.target.value;
      console.log(e.key);
      //url 변경
      navigate(`/ProductAllPage?q=${keyword}`)
    }
  }

  return (
    <Wrapper>
      <FrameHeader>
        <SectionTop>
          <WrapLogo to='/'>
            <img src={`${process.env.PUBLIC_URL}/images/Header/Logo.svg`} alt="logo" />
          </WrapLogo>
          <Search>
            <form>
              <input type="text" placeholder='신상품이 보고 싶다면? #신상태그'
                onKeyPress={onCheckEnter}
              /> 
              <button>
                <img src={`${process.env.PUBLIC_URL}/images/Header/Search.png`} alt="" />
              </button>
            </form>
          </Search>
          <PersonalMenu>
            {
              props.personalMenu.map((item, index) => {
                return (<PersonalService to={item[1]}>{item[0]}</PersonalService>);
              })
            }
          </PersonalMenu>
        </SectionTop>
        <SectionBottom>
          <Gnb>
            {
              props.gnbData.map((item, index) => {
                return (
                  <GnbLink to={item[1]} className={currentPath === item[1] ? 'selected' : ''}>{item[0]}</GnbLink>
                );
              })
            }
          </Gnb>
        </SectionBottom>
      </FrameHeader>
    </Wrapper>
  );
}

export default Header

/*
{ 
      "id": 0, 
      "frontImg": "https://images.kolonmall.com/Prod_Img/KS/2023/LM1/JKJJW23222GRI_LM1.jpg",
      "backImg": "https://images.kolonmall.com/Prod_Img/KS/2023/LZ2/JKJJW23222GRI_LZ2.jpg",
      "title": "여성 2L 크롭 방수자켓 #윈드케이", 
      "price": 290000,
      "tag":["new"],
      "size": ["XS", "S", "M", "L"]
    },
*/