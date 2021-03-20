import React from 'react';
import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';
import VideoArea from './VideoArea';
import RtcClient from '../utils/RtcClient';

const App = () => {
  const rtcClient = new RtcClient();
  console.log({ rtcClient });

  return (
    <>
      <InputFormLocal rtcClient={rtcClient} />
      <InputFormRemote rtcClient={rtcClient} />
      <VideoArea rtcClient={rtcClient} />
    </>
  );
};

export default App;
