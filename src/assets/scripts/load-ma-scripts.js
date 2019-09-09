if (document.referrer) {
  var env = new URL(document.referrer);
  var scriptPath = "/customerengagementfacade/assets/ui-extensions/iframes/ma-extension-client.js"
  var maExtClientJsURL = "https://" + env.host + scriptPath;
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
