document.getElementById("registerBtn").addEventListener("click", () => {
    const input = document.getElementById("usernames").value;
    const result = document.getElementById("result");

    const usernames = input
        .split(/\r?\n/)
        .map(s => s.trim())
        .filter(s => s.length > 0);

    if (usernames.length === 0) {
        result.textContent = "ユーザIDを入力してください。";
        return;
    }

    const delayMs = 3000;

    result.textContent = `${usernames.length}人分の処理を順番に開始します...`;

    chrome.runtime.sendMessage({
        type: "start-favorite",
        usernames,
        delayMs
    });

    window.close();
});
