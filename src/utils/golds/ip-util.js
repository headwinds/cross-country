// this doesn't work reliably 
export default function ip_local()
{
 var ip = false;
 window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection || false;
 if (window.RTCPeerConnection)
 {
  ip = [];
  var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};
  pc.createDataChannel('');
  pc.createOffer(pc.setLocalDescription.bind(pc), noop);
  pc.onicecandidate = function(event)
  {
   if (event && event.candidate && event.candidate.candidate)
   {
    var s = event.candidate.candidate.split('\n');
    ip.push(s[0].split(' ')[4]);
   }
  }
 }
 return ip;
}