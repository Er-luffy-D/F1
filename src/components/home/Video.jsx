import React, { useEffect, useRef } from 'react'

export const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.15;
    }
  }, []);

  return (
    <div className='h-full w-full '>

      <video ref={videoRef} autoPlay loop muted className='h-full w-full object-cover' src='f1.mp4'></video>
    </div>
  )
}
