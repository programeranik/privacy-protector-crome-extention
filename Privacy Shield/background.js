chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1, 2, 3, 4],
      addRules: [
        {
          "id": 1,
          "priority": 1,
          "action": { "type": "block" },
          "condition": {
            "urlFilter": "*://connect.facebook.net/*",
            "resourceTypes": ["script"]
          }
        },
        {
          "id": 2,
          "priority": 1,
          "action": { "type": "block" },
          "condition": {
            "urlFilter": "*://www.googletagmanager.com/*",
            "resourceTypes": ["script"]
          }
        },
        {
          "id": 3,
          "priority": 1,
          "action": { "type": "block" },
          "condition": {
            "urlFilter": "*://www.google-analytics.com/*",
            "resourceTypes": ["script"]
          }
        },
        {
          "id": 4,
          "priority": 1,
          "action": { "type": "block" },
          "condition": {
            "urlFilter": "*://ads.google.com/*",
            "resourceTypes": ["script"]
          }
        }
      ]
    });
  });
  