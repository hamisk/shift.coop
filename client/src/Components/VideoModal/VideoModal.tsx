import React from 'react';

type Props = {};

function VideoModal({}: Props) {
  return (
    <div className='modal'>
      <div className='modal__video-container'>
        <iframe
          className='home__video'
          src='https://www.youtube.com/embed/7O_31DorPUk?controls=0'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default VideoModal;
