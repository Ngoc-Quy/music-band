import Header from '../Header';
import SideBar from '~/components/Admin/SideBar';
import VideoHomePage from '~/assets/video-1920.mp4';
import './Home.scss';

function Home() {
  return (
    <div className="homepage-container">
      <Header />
      <video width="750px" height="500px" autoPlay loop muted>
        <source src={VideoHomePage} type="video/mp4" />
      </video>
      <div className="home-content">
        <div className="home-title1">There is better way to back</div>
        <div className="home-title2">you dont want to make a boring form</div>
        <div className="home-title3">
          <button>Get is start</button>
        </div>
      </div>
      <SideBar />
    </div>
  );
}

export default Home;
