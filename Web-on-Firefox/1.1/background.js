const CHROMIUM_WIN11_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
  "AppleWebKit/537.36 (KHTML, like Gecko) " +
  "Chrome/120.0.0.0 Safari/537.36";

browser.webRequest.onBeforeSendHeaders.addListener(
  details => {
    for (const header of details.requestHeaders) {
      if (header.name.toLowerCase() === "user-agent") {
        header.value = CHROMIUM_WIN11_UA;
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  {
    urls: [
      "*://*.snapchat.com/*",
      "*://*.sc-corp.net/*"
    ]
  },
  ["blocking", "requestHeaders"]
);
