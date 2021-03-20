export default class RtcClient {
  constructor(setRtcClient) {
    const config = {
      iceServers: [
        {
          urls: 'stun:stun.stunprotocol.org',
        },
      ],
    };

    this.ortcPeerConnection = new RTCPeerConnection(config);
    this.localPeerName = '';
    this.remotePeerName = '';
    this._setRtcClient = setRtcClient;
    this.mediaStream = null;
  }

  setRtcClient() {
    this._setRtcClient(this);
  }

  async getUserMedia() {
    try {
      const constraints = { audio: true, video: true };
      this.mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (error) {
      console.error(error);
    }
  }

  startListening(localPeerName) {
    this.localPeerName = localPeerName;
    this.setRtcClient();
    // TODO; ここにシグナリングサーバをりすんする処理を追加する
  }
}
