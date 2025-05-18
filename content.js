chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type !== "run-favorite") return;

    console.log("AtCoder Auto Favorite: content.js 実行開始");

    // 対象ユーザー名と一致するURLか確認
    const currentPath = window.location.pathname;
    const expectedPath = `/users/${message.username}`;
    if (currentPath !== expectedPath) {
        console.warn(`対象ユーザーと一致しません: 現在=${currentPath}, 指定=${expectedPath}`);
        return;
    }

    // ユーザーが存在しない場合
    const noUser = document.querySelector('.alert.alert-danger');
    if (noUser && noUser.textContent.includes("指定されたユーザが見つかりません")) {
        console.log("指定されたユーザが存在しません。処理を中止します。");
        return;
    }

    // 登録前・登録済みのアイコンをそれぞれ取得
    const unfavIcon = document.querySelector('img.fav-btn[src$="unfav.png"]');
    const favIcon = document.querySelector('img.fav-btn[src$="fav.png"]');

    if (unfavIcon) {
        console.log("お気に入り未登録です。クリックして登録します。");
        unfavIcon.click();
    } else if (favIcon) {
        console.log("このユーザーはすでにお気に入りに登録されています。クリックは不要です。");
    } else {
        console.log("お気に入りボタンが見つかりませんでした。");
    }
});
