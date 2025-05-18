chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "start-favorite") {
        const usernames = message.usernames;
        const delayMs = message.delayMs ?? 3000;

        usernames.forEach((username, index) => {
            setTimeout(() => {
                const url = `https://atcoder.jp/users/${username}`;
                chrome.tabs.create({ url, active: false }, (tab) => {
                    // ページ読み込み完了後にメッセージ送信
                    chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
                        if (tabId === tab.id && info.status === 'complete') {
                            chrome.tabs.onUpdated.removeListener(listener);

                            chrome.tabs.sendMessage(tab.id, {
                                type: "run-favorite",
                                username: username
                            });
                        }
                    });
                });
            }, index * delayMs);
        });

        return true;
    }
});
