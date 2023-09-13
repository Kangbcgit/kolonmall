import React from 'react'
import { styled } from 'styled-components'
import { Inner } from '../../styles/GlobalStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube ,faInstagram, faFacebookF, faAppStoreIos} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
`;

const FooterTop = styled.div`
  border-top: 1px solid #AAA;
  border-bottom: 1px solid #AAA;
`;
const FrameInnerTop = styled(Inner)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;
const OpeningOfAnAgency = styled.div`
  font-size: 14px;
  color: #666;
  font-weight: 600;
`;
const WrapSns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  font-size: 18px;
`;
const FooterBottom = styled.div`
  display: flex;
  padding: 50px 0;

  background: #F5F5F5;
`;
const FrameInnerBottom = styled(Inner)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LeftBottomContent = styled.div`
  overflow: hidden;
  &>.wrapLogo {
  }
  &>.textContent {
    margin-top: 20px;
    line-height: 1.7;
    &>h4 {
      font-size: 14px;
      font-weight: 600;
    }
    &>.first {
      font-size: 12px;
      color: #898989;
      &>button {
        background: inherit;
        border: 1px solid rgb(204, 204, 204);
        color: rgb(137, 137, 137);
      }
    }
    &>.second {
      display: block;
      margin-top: 20px;
      font-size: 13px;
      color: #666;
      &>a {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    &>.third {
      font-size: 11px;
      color: #AAA;
    }
  }
`;
const RightBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;
const TopRightBottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  font-size: 12px;
  color: #898989;

  &>ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &>a {
    line-height: 2;
    &>span {
      font-size: 18px;
      font-weight: bold;
      color: #000;
    }
  }
`;
const CenterRightBottomContent = styled.div`
  margin-left: auto;
  &>select {
    padding: 10px 20px;
    background: inherit;
    border: 1px solid rgb(228, 228, 228);
    color: #898989;
  }
`;
const BottomRightBottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #AAA;
  line-height: 1.5;
  &>div {
    display: flex;
    align-items: center;
    &>div {
      width: 30px;
      height: 30px;
      &>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

function Footer() {
  return(
    <>
      <Wrapper>
        <FooterTop>
          <FrameInnerTop>
            <OpeningOfAnAgency>대리점 개설 문의</OpeningOfAnAgency>
            <WrapSns>
              <FontAwesomeIcon icon={faFacebookF} style={{color: "#424242",}} />
              <FontAwesomeIcon icon={faInstagram} style={{color: "#424242",}} />
              <FontAwesomeIcon icon={faYoutube} style={{color: "#424242",}} />
            </WrapSns>
          </FrameInnerTop>
        </FooterTop>
        <FooterBottom>
          <FrameInnerBottom>
            <LeftBottomContent>
              <div className="wrapLogo">
                <img src={`${process.env.PUBLIC_URL}/images/Header/logo_Footer.svg`} alt="" />
              </div>
              <div className='textContent'>
                <h4>코오롱인더스트리㈜ FnC부문</h4>
                <span className='first'>
                  대표이사 : 유석진 서울특별시 강남구 삼성로 518<br/>
                  TEL : 1588-7667 (유료)  Mail : kolonmall@kolon.com<br/>
                  통신판매업신고 : 제2017-서울강남-02297호 <br/>
                  사업자등록번호 : 138-85-19612 <button>사업자정보 확인</button>
                </span>
                <span className='second'>
                  고객님은 안전거래를 위해 결제 시 저희 사이트에서 가입한 구매안전 서비스를 이용하실 수 있습니다.
                 <br /> 토스페이먼츠 <Link to={'#none'}>가입확인</Link>
                </span><br />
                <span className='third'>
                  &copy; KOLON MALL all rights reserved
                </span>
              </div>
            </LeftBottomContent>
            <RightBottomContent>
              <TopRightBottomContent>
                <ul>
                  <li><a href="#none">로그인</a></li>
                  <li><a href="#none">실시간 채팅상담</a></li>
                  <li><a href="#none">비회원 주문조회</a></li>
                </ul>
                <ul>
                  <li><a href="#none">매장안내</a></li>
                  <li><a href="#none">입점/제휴문의</a></li>
                  <li><a href="#none">이용약관</a></li>
                  <li><a href="#none">개인정보처리방침</a></li>
                </ul>
                <a href='#none'>
                  고객센터 ><br/>
                  <span>1588-7667 (유료)</span><br/>
                    (09:30 ~ 18:00, 주말/공휴일 휴무)
                </a>
              </TopRightBottomContent>
              <CenterRightBottomContent>
                <select name="" id="">
                  <option value="">Family Site</option>
                </select>
              </CenterRightBottomContent>
              <BottomRightBottomContent>
                <div>
                  <div className="wrapImg">
                    <img src={`${process.env.PUBLIC_URL}/images/Header/protect.png`} alt="" />
                  </div>
                  인증범위인터넷 쇼핑몰 운영(코오롱 패션샵)<br/>
                  유효기간2020.11.04 ~ 2023.11.03
                </div>
                <WrapSns>
                  <FontAwesomeIcon icon={faFacebookF} style={{color: "#424242",}} />
                  <FontAwesomeIcon icon={faInstagram} style={{color: "#424242",}} />
                  <FontAwesomeIcon icon={faYoutube} style={{color: "#424242",}} />
                  <FontAwesomeIcon icon={faAppStoreIos} style={{color: "#424242",}} />
                </WrapSns>
              </BottomRightBottomContent>
            </RightBottomContent>
          </FrameInnerBottom>
        </FooterBottom>
      </Wrapper>
    </>
  )
}

export default Footer