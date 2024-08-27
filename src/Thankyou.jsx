// import React, { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
// import './Thankyou.css';

// const VideoPlayer = () => {
//   const [isMuted, setIsMuted] = useState(false); // Initially muted
//   const [playing, setPlaying] = useState(true); // Attempt to autoplay

//   useEffect(() => {
//     // Function to handle unmuting and ensuring video plays
//     const handleUserInteraction = () => {
//       setIsMuted(false);
//       setPlaying(true); // Ensure video starts playing
//       window.removeEventListener('click', handleUserInteraction);
//     };

//     // Add event listener for user interaction to unmute
//     window.addEventListener('click', handleUserInteraction);

//     // Cleanup listener on component unmount
//     return () => {
//       window.removeEventListener('click', handleUserInteraction);
//     };
//   }, []);

//   return (
//     <div className="video-container">
//       <ReactPlayer
//         url="https://cdn.pixabay.com/video/2020/01/05/30902-383991325_tiny.mp4"
//         playing={playing}    // Attempt to autoplay
//         controls={true}      // Show controls
//         loop={true}          // Loop the video
//         volume={1}           // Set volume to full
//         muted={isMuted}      // Muted initially, unmute on user interaction
//         width="100%"         // Full width
//         height="500px"
//       />
//     </div>
//   );
// };

// export default VideoPlayer;
import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import logo from '../src/assests/logo.png'; 
import './Thankyou.css'; 

const Thankyou = () => {
    const videoRef = useRef(null); 

    useEffect(() => {
      setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.muted = false;
          }
          console.log("Chala");
      }, 1000);
    }, []);
  
  return (
    <div className="order-confirmation">
      <header className="header">
      <img src={logo} alt="GOAT NUTRITION" className="logo" />
      </header>
      <div className="confirmation-body">
        <div className="check-icon"></div>
        <h3 className='h3'>Your order is placed successfully!</h3>
        <div style={{padding:'10px'}}>
        <div  className="video-container">
        <video
         ref={videoRef}
            src="https://cdn.pixabay.com/video/2020/01/05/30902-383991325_tiny.mp4"
            controls
            autoPlay
            muted
            width="100%"    // Full width
            height="500px"
          >
          </video>
    </div>
    </div>
      </div>
    </div>
  );
};

export default Thankyou;
