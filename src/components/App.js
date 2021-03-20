import React from 'react';

import VideoArea from './VideoArea';
import useRtcClient from './hooks/useRtcClient';
import InputForms from './InputForms';

const App = () => {
  const rtcClient = useRtcClient();

  return (
    <>
      <InputForms rtcClient={rtcClient} />
      <VideoArea rtcClient={rtcClient} />
    </>
  );
};

export default App;
