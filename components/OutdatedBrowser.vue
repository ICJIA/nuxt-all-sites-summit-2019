<template>
  <div>  
    <div
      v-if="browserObj.isIE"
      class="text-xs-center pt-5 pb-5"
      style="background-color: red; margin-top: 0px;"
    >
      <h1 style="color: white">
        Your browser is out of date.
        <br >In order to use this application, please update to the latest
        <br >
        <a 
          href="https://www.google.com/chrome/" 
          class="browserDetect"
        >Chrome</a
        >,
        <a
          href="https://www.mozilla.org/en-US/firefox/new/"
          class="browserDetect"
        >Firefox</a
        >, or
        <a
          href="https://www.microsoft.com/en-us/windows/microsoft-edge"
          class="browserDetect"
        >Microsoft Edge</a
        >.
      </h1>
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    let ua = window.navigator.userAgent
    let browserObj = {}

    browserObj.isOpera =
      !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0
    // Firefox 1.0+
    browserObj.isFirefox = typeof InstallTrigger !== 'undefined'
    // Safari 3.0+
    /*eslint-disable */
    browserObj.isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function(p) {
        return p.toString() === '[object SafariRemoteNotification]'
      })(!window['safari'] || safari.pushNotification)
    /*eslint-ensable */
    // Internet Explorer 6-11d
    browserObj.isIE = /*@cc_on!@*/ false || !!document.documentMode
    // Edge 20+
    browserObj.isEdge = !browserObj.isIE && !!window.StyleMedia
    // Chrome 1+
    browserObj.isChrome = !!window.chrome && !!window.chrome.webstore
    // Blink engine detection
    browserObj.isBlink =
      (browserObj.isChrome || browserObj.isOpera) && !!window.CSS

    this.browserObj = browserObj
  },
  data() {
    return {
      browserObj: {}
    }
  }
}
</script>

<style scoped>
</style>
