import logo from './logo.svg';
import './App.css';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" style={containerStyle}>
      <Header/>
      <div style={mainContentStyle}>
        <Sidebar/>
        <div style={contentStyle}>
          <FeaturedSection/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

// 전체 컨테이너 스타일
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

// 메인 컨텐츠 영역 스타일
const mainContentStyle = {
  display: 'flex',
  height: '100vh', // 전체 화면 높이
};

// 사이드바 옆에 나타나는 컨텐츠 영역
const contentStyle = {
  marginLeft: '260px', // 사이드바 너비 만큼 마진 추가
  padding: '20px',
  flexGrow: 1, // 컨텐츠가 남은 공간을 차지하게 함
};

export default App;
