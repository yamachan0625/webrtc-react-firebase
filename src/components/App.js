import React, { useReducer } from 'react';
import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';
import VideoArea from './VideoArea';
import RtcClient from '../utils/RtcClient';

const App = () => {
  // const rtcClient = new RtcClient();
  const [rtcClient, _setRtcClient] = React.useState(new RtcClient());
  const [, forceRender] = useReducer((bool) => !bool, false);

  const setRtcClient = (rtcClient) => {
    _setRtcClient(rtcClient);
    forceRender();
  };

  return (
    <>
      <InputFormLocal rtcClient={rtcClient} setRtcClient={setRtcClient} />
      <InputFormRemote rtcClient={rtcClient} setRtcClient={setRtcClient} />
      <VideoArea rtcClient={rtcClient} />
    </>
  );
};

export default App;
