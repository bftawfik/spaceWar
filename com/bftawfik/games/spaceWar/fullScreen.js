//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;
  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    //console.log('true');
    requestFullScreen.call(docEl);
    return true;
  }
  else {
    //console.log('false');
    cancelFullScreen.call(doc);
    return false;
  }
}
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
