import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 420px;
  height: 634px;

  margin: 100px auto 0;

  &>h3 {
    font-size: 28px;
    font-weight: 200;
  }
  &>form {
    position: relative;
    &>.isSaveId {
      position: absolute;
      bottom: 86px;
      right: 300px;
      transform: translateX(100%);
    }
  }
`;
const WrapPhoneNumberLogin = styled.div`
  display: flex;
  justify-content: end;
  height: 30px; //자식요소 크기 설정되면 삭제할 요소
  &>button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    background: #fff;
    color: #000;
    border: 1px solid gray;
    cursor: pointer;
  }
`;
const Accountnput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 40px;

  &>input{
    width: 300px;
    height: 100%;
    border: none;
    border-bottom: 1px solid #DEDEDE;
    &:focus {
      outline: none;
    }
  }
`;
const WrapLoginButton = styled.div`
  margin-top: 60px;
  &>button {
    height: 56px;
    width: 420px;
    
    background: #fff;
    border: 1px solid #000;
    color: #000;
    font-size: 18px;

    cursor: pointer;
  }
`;
const FindAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  &>.bar {
    width: 1px;
    height: 100%;
    background: gray;
  }
`;

function Login(props) {
  const [ID, setID] = useState(null);
  const [PW, setPW] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const productPath = location?.state?.path;
  const loginUser = e => {
    e.preventDefault();
    if ((ID === null || ID === '')) {
      alert('아이디를 입력해주세요');
      return;
    } else if ((PW === null || PW === '')) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    console.log('ID: ', ID);
    console.log('PW: ', PW);
    console.log('제출됨');
    props.loginauthenicate();
    console.log(productPath)
    navigate(productPath ? productPath : '/');
  }
  const getID = e => {
    setID(e.target.value);
  }
  const getPW = e => {
    setPW(e.target.value);
  }
  return (
    <Wrapper>
      <h3>로그인</h3>
      <WrapPhoneNumberLogin>
        <button>휴대폰번호 로그인</button>
      </WrapPhoneNumberLogin>
      <form onSubmit={e => {
        loginUser(e);
      }}>
        <Accountnput style={{marginBottom: "20px"}}>
          <div>아이디</div>
          <input type="text" placeholder='아이디를 입력해주세요.' onChange={getID}/>
        </Accountnput>
        <Accountnput>
          <div>비밀번호</div>
          <input type="password" placeholder='비밀번호를 입력해주세요.' onChange={getPW}/>
        </Accountnput>
        <div className="isSaveId">
          <input type="checkbox" /> <span>아이디 저장</span>
        </div>
        <WrapLoginButton>
          <button>로그인</button>
        </WrapLoginButton>
      </form>
      <FindAccount>
        <Link to='#none'>아이디 찾기</Link>
        <div className="bar"></div>
        <Link to='#none'>비밀번호 찾기</Link>
      </FindAccount>
    </Wrapper>
  )
}

export default Login