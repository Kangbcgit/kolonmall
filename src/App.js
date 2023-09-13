import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import AboutPage from './Pages/AboutPage/AboutPage';
import ProductAllPage from './Pages/ProductAllPage/ProductAllPage';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Pages/Footer/Footer';
import { useEffect, useState } from 'react';
import User from './Pages/Account/User';
import Login from './Pages/Account/Login';
import axios from 'axios';
import Private from './Route/Private';
/*
  유저 스토리
  1. 헤더, 푸터 html, css 작성 미디어쿼리 작성
  2. DetailPage를 누르면 전체 상품이 나온다
  3. 상단: 상품 개수, 높은 금액, 낮은 금액, 할인률
  4. 5열로 배열됨 780이하는 2열로 변경 (media)
  
*/
/*
  터미널 열어서
  1. npm install react-router-dom@6
  2. npm i -g json-server
*/
function App() {
  /* url 확인 */
  const [authenicate, setAuthenicate] = useState(false);
  // const Private = () => {
  //   return authenicate === true ? (<User/>) : (<Navigate to='/Login' />);
  // }
  const [personalMenu, setPersonalMenu] = useState([
    ['KOLON MALL', '/'],
    ['로그인', '/Login'],
    ['회원가입', '/'],
    ['고객센터', '/'],
    (
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/Header/장바구니.svg`} alt="" />
      </div>
    )
  ]);
  const [gnbData, setGnbData] = useState([
    ['소개', '/AboutPage'],
    ['홈', '/'],
    ['상품', '/ProductAllPage'],
    ['기획전', '/'],
    ['컬렉션', '/'],
    ['매장안내', '/'],
    ['WEATHER MONSTER', '/'],
  ]);
  const [data, setData] = useState([]);

  const loginauthenicate = () => {
    setAuthenicate(true);
  }

  useEffect(() => {
    const postApi = async (name) => {
      axios.get(`https://kolonmall-kang.netlify.app/products/`)
      .then((response) => {
        if (!response.status) {
          throw new Error('서버 응답 오류: ' + response.status);
        }
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });;
    }
    postApi();
  }, [])

  return (
    <>
      <Header gnbData={gnbData} personalMenu={personalMenu}/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/AboutPage' element={<AboutPage/> }/>
        <Route path='/ProductAllPage/' element={<ProductAllPage data={data} />} />
        <Route path='/ProductDetailPage/:id' element={<Private authenicate={authenicate} data={data}/>} />
        <Route path='/Login' element={<Login loginauthenicate={loginauthenicate}/>} />
        <Route path='/User' element={<User />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
