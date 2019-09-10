if (document && document.referrer) {
  var url = new URL(document.referrer); 
  if (url) {
    var scriptPath = (url.hostname != "localhost") ? 
    "/customerengagementfacade/assets/ui-extensions/iframes/ma-extension-client.js" :
    "/assets/ui-extensions/iframes/ma-extension-client.js";
    var maExtClientJsURL = url.origin + scriptPath;
    console.log("Downloading... " + maExtClientJsURL);

    var maExtScriptElement = document.createElement('script');
    maExtScriptElement.src = maExtClientJsURL;
    maExtScriptElement.type = "text/javascript";
    maExtScriptElement.onload = OnceMAExtLoaded;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(maExtScriptElement, s);

    function OnceMAExtLoaded() {
      console.log(maExtClientJsURL + " is loaded");
      if (MAExtension) {
        console.log("MAExtension:")
        console.log(MAExtension);
      }
    }
  }
}
