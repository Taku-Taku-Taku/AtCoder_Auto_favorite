document.getElementById("registerBtn").addEventListener("click", () => {
    const input = document.getElementById("usernames").value;

    const usernames = input
        .split(/\r?\n/)
        .map(s => s.trim())
        .filter(s => s.length > 0);

    if (usernames.length === 0) {
        alert("ユーザIDを入力してください。");
        return;
    }

    chrome.runtime.sendMessage({ type: "start-favorite", usernames });
    window.close(); // ポップアップを閉じても処理が続く
});
