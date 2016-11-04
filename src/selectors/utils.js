 
export function browserInfo() {
  let a = navigator.userAgent;
  let g = a.toLowerCase();
  function m() {
    if (g.indexOf("lbbrowser") > 0) {
      return g.match(/lbbrowser/gi);
    }
    if (g.indexOf("maxthon") > 0) {
      return g.match(/maxthon\/[\d.]+/gi);
    }
    if (g.indexOf("bidubrowser") > 0) {
      return g.match(/bidubrowser/gi);
    }
    if (g.indexOf("baiduclient") > 0) {
      return g.match(/baiduclient/gi);
    }
    if (g.indexOf("metasr") > 0) {
      return g.match(/metasr/gi);
    }
    if (g.indexOf("qqbrowser") > 0) {
      return g.match(/qqbrowser/gi);
    }
    if (!(function () {
      if (navigator.mimeTypes.length > 0) {
        var b;
        for (b in navigator.mimeTypes) {
          if (navigator.mimeTypes[b]["type"] == "application/vnd.chromium.remoting-viewer") {
            return true;
          }
        }
      }
      return false;
    })() && (("track" in document.createElement("track")) && !("scoped" in document.createElement("style")) && !("v8Locale" in window) && /Gecko\)\s+Chrome/.test(navigator.appVersion)) && (("track" in document.createElement("track")) && ("scoped" in document.createElement("style")) && ("v8Locale" in window))) {
      return "qihu";
    }
    if (g.indexOf("msie") > 0) {
      return g.match(/msie [\d.]+;/gi);
    }
    if (window.document.documentMode) {
      return "msie";
    }
    if (g.indexOf("edge") > 0) {
      return g.match(/edge\/[\d.]+/gi);
    }
    if (g.indexOf("firefox") > 0) {
      return g.match(/firefox\/[\d.]+/gi);
    }
    if (g.indexOf("opr") > 0) {
      return g.match(/opr\/[\d.]+/gi);
    }
    if (g.indexOf("chrome") > 0) {
      return g.match(/chrome\/[\d.]+/gi);
    }
    if (g.indexOf("safari") > 0 && g.indexOf("chrome") < 0) {
      return g.match(/safari\/[\d.]+/gi);
    }
    return "";
  }
  let browser = (m() + "").replace(/[0-9.\/|;|\s]/ig, "");
  let browserversion = (function () {
    if (browser == "msie") {
      if (a.search(/MSIE [2-5]/) > 0) {
        return "ie5";
      }
      if (a.indexOf("MSIE 6") > 0) {
        return "ie6";
      }
      if (a.indexOf("MSIE 7") > 0) {
        return "ie7";
      }
      if (a.indexOf("MSIE 8") > 0) {
        return "ie8";
      }
      if (a.indexOf("MSIE 9") > 0) {
        return "ie9";
      }
      if (a.indexOf("MSIE 10") > 0) {
        return "ie10";
      }
      if (window.document.documentMode == "11") {
        return "ie11";
      }
      return "other";
    }
    else {
      return "";
    }
  })();
  let browsertype = (function () {
    if (g.indexOf("msie") > 0 || new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(g)) {
      return "ie";
    }
    if (g.indexOf("firefox") > 0) {
      return "firefox";
    }
    if (g.indexOf("chrome") > 0) {
      return "chrome";
    }
    if (g.indexOf("safari") > 0 && g.indexOf("chrome") < 0) {
      return "safari";
    }
    return "other";
  })();
  function l() {
    let n = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    let o = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (o) {
      return "mac";
    }
    let b = (navigator.platform == "X11") && !n && !o;
    if (b) {
      return "unix";
    }
    let p = (String(navigator.platform).indexOf("Linux") > -1);
    if (p) {
      return "linux";
    }
    if (n) {
      return "windows";
    }
    return "other";
  }
  let os = l();
  let osversion = (function () {
    if (os == "windows") {
      if (a.indexOf("Windows NT 5.1") > -1 || a.indexOf("Windows XP") > -1) {
        return "xp";
      }
      if (a.indexOf("Windows NT 6.1") > -1 || a.indexOf("Windows 7") > -1) {
        return "win7";
      }
      if (a.indexOf("Windows NT 6.2") > -1 || a.indexOf("Windows 8") > -1) {
        return "win8";
      }
      if (a.indexOf("Windows NT 6.3") > -1 || a.indexOf("Windows 8.1") > -1) {
        return "win8.1";
      }
      if (a.indexOf("Windows NT 10") > -1) {
        return "win10";
      }
      return "other";
    }
  })();
  let i = (function (n) {
    let b = 0;
    switch (n) {
      case "msie":
        b = 1;
        break;
      case "chrome":
        b = 2;
        break;
      case "firefox":
        b = 3;
        break;
      case "safari":
        b = 4;
        break;
      case "opr":
        b = 5;
        break;
      case "lbbrowser":
        b = 6;
        break;
      case "maxthon":
        b = 7;
        break;
      case "bidubrowser":
        b = 8;
        break;
      case "metasr":
        b = 9;
        break;
      case "qqbrowser":
        b = "a";
        break;
      case "qihu":
        b = "b";
        break;
      case "baiduclient":
        b = "c";
        break;
      case "edge":
        b = "d";
        break;
    }
    return b;
  })(browser);
  let j = (function (n) {
    let b = 0;
    switch (n) {
      case "ie6":
        b = 1;
        break;
      case "ie7":
        b = 2;
        break;
      case "ie8":
        b = 3;
        break;
      case "ie9":
        b = 4;
        break;
      case "ie10":
        b = 5;
        break;
      case "ie11":
        b = 6;
        break;
      case "other":
        b = 7;
        break;
      case "ie5":
        b = 8;
        break;
    }
    return b;
  })(browserversion);
  let d = (function (n) {
    let b = 0;
    switch (n) {
      case "windows":
        b = 1;
        break;
      case "mac":
        b = 2;
        break;
      case "linux":
        b = 3;
        break;
      case "unix":
        b = 4;
        break;
    }
    return b;
  })(os);
  let f = (function (n) {
    let b = 0;
    switch (n) {
      case "xp":
        b = 1;
        break;
      case "vista":
        b = 2;
        break;
      case "win7":
        b = 3;
        break;
      case "win8":
        b = 4;
        break;
      case "win8.1":
        b = 5;
        break;
      case "other":
        b = 6;
        break;
      case "win10":
        b = 7;
        break;
    }
    return b;
  })(osversion);
  let k = (function (n) {
    let b = 0;
    switch (n) {
      case "ie":
        b = 1;
        break;
      case "firefox":
        b = 2;
        break;
      case "chrome":
        b = 3;
        break;
      case "safari":
        b = 4;
        break;
    }
    return b;
  })(browsertype);
  return {
    browsertype,
    browserversion,
    osversion, browser
  };
}
