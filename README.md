# Snapchat-Tweaks

Tweaks for Snapchat Web.

## Extensions

### Web on Firefox

Lets you use Snapchat for Web on Firefox. Simple and clean. Here's literally all the code that runs:

```js
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
```

Unlike [Snapchat web by LN](https://addons.mozilla.org/firefox/addon/snapchat-web/), which does a whole bunch of external data requests.

```text
.
├── Web-on-Firefox
│   └── x.x
│       ├── x.x.zip
│       ├── background.js
│       └── manifest.json
├── blocklist.txt
├── LICENSE
└── README.md

4 directories, 9 files
```
