import React, { useEffect, useRef } from 'react';
import Peer from 'simple-peer';

const VideoCall = ({ initiator }) => {
  const userVideo = useRef();
  const partnerVideo = useRef();
  const peer = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        userVideo.current.srcObject = stream;
        peer.current = new Peer({
          initiator: initiator,
          trickle: false,
          stream: stream
        });

        peer.current.on('signal', data => {
          // Send signal to the other peer via server (e.g., using Socket.io)
        });

        peer.current.on('stream', stream => {
          partnerVideo.current.srcObject = stream;
        });
      });
  }, [initiator]);

  return (
    <div className="video-call-container">
      <video ref={userVideo} autoPlay muted className="my-video" />
      <video ref={partnerVideo} autoPlay className="partner-video" />
    </div>
  );
};

export default VideoCall;
