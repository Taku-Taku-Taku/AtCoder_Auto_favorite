chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "start-favorite") {
        const usernames = message.usernames;
        const delayMs = 3000;

        usernames.forEach((username, index) => {
            setTimeout(() => {
                const url = `https://atcoder.jp/users/${username}`;
                chrome.tabs.create({ url, active: false });
                console.log(`開いた: ${username}`);
            }, index * delayMs);
        });

        sendResponse({ status: "started" });
        return true; // 非同期応答を許可
    }
});
