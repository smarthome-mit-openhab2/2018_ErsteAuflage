/*
Disables the border and scrolling of the Webview sitemap iframe in the openhab.app webpage.
*/
function formatIframe() {
  var iframe = window.frameElement;
  if (iframe) {
    iframe.style.border = "0px";  
    iframe.scrolling = "no";
    iframe.style.height = "350px";
  }
}
