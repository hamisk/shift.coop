import React from 'react';
import './Home.scss';
import hero from '../../assets/images/moriah_deliver_coverphoto_facebook.jpg';
import videoScreenshot from '../../assets/images/video-thumbnail.png';

const Home: React.FC = () => {
  return (
    <section className='home'>
      {/* <img src={hero} alt='deliverers' className='home__hero' /> */}
      <div className='home__column-left'>
        <div className='home__text-wrapper'>
          <h2 className='home__heading'>Shift Delivery</h2>
          <p className='home__copy'>
            A worker owned co-op located in Vancouver that specializes in last mile delivery.
          </p>
          <p className='home__copy'>Do you want to setup a delivery account with us?</p>
          <p className='home__copy'>info@shift.coop</p>
          <p className='home__copy'>
            We offer head-turning advertising on our unique vehicles. Out of home advertising at it's finest.
          </p>
          <p className='home__copy'>marc@shift.coop</p>
        </div>
      </div>
      <div className='home__column-right'>
        <div className='home__screenshot-wrapper'>
          <img src={videoScreenshot} alt='video thumbnail' className='home__screenshot' />
        </div>
      </div>
    </section>
  );
};

export default Home;
