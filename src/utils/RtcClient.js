export default class RtcClient {
  constructor(localPeerName = '', remotePeerName = '') {
    const config = {
      iceServers: [
        {
          urls: 'stun:stun.stunprotocol.org',
        },
      ],
    };

    this.rtcPeerConnection = new RTCPeerConnection(config);
    this.localPeerName = localPeerName;
    this.remotePeerName = remotePeerName;
  }
}
