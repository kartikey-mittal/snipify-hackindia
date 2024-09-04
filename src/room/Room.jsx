import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const { roomId } = useParams();
  const myMeetingRef = useRef(null);

  useEffect(() => {
    const skilledName = localStorage.getItem('SkilledName');
    const learnerName = localStorage.getItem('LearnerName');

    if (skilledName || learnerName) {
      const userName = skilledName || learnerName;
      const appID = 826756909;
      const serverSecret = "e08c5eb2c48018ec8a3bbe95693a9efd";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), userName);

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: myMeetingRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });

      // Add event listener for onDisconnect event
      
    }
  }, [roomId]);

  const meetingDivStyle = {
    width: '100%',
    height: '100vh',
  };

  return (
    <div style={meetingDivStyle} ref={myMeetingRef} />
  );
};

export default Room;
