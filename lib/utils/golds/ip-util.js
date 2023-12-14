import { getWindow } from './server-side-util';


// this doesn't work reliably 
export default function ip_local()
{
 var ip = false;

 const screenWindow = getWindow();

 screenWindow?.RTCPeerConnection = screenWindow?.RTCPeerConnection || screenWindow?.mozRTCPeerConnection || screenWindow?.webkitRTCPeerConnection || false;
 if (screenWindow?.RTCPeerConnection)
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