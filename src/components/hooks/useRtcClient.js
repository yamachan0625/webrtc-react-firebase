import React, { useState, useReducer, useEffect } from 'react';
import RtcClient from '../../utils/RtcClient';

const useRtcClient = () => {
  const [rtcClient, _setRtcClient] = useState(null);
  const [, forceRender] = useReducer((bool) => !bool, false);

  const setRtcClient = (rtcClient) => {
    _setRtcClient(rtcClient);
    forceRender();
  };

  useEffect(() => {
    const init = async () => {
      const client = new RtcClient(setRtcClient);
      client.setRtcClient();
      await client.getUserMedia();
    };
    init();
  }, []);

  return rtcClient;
};

export default useRtcClient;
