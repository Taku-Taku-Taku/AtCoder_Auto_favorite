(function () {
    console.log("AtCoder Auto Favorite: content.js 実行開始");

    // ユーザーが存在しない場合
    const noUser = document.querySelector('.alert.alert-danger');
    if (noUser && noUser.textContent.includes("指定されたユーザが見つかりません")) {
        console.log("指定されたユーザが存在しません。処理を中止します。");
        return;
    }

    // 未登録状態（unfav.png = 登録前）を探してクリック
    const unfavIcon = document.querySelector('img.fav-btn[src$="unfav.png"]');

    // すでにお気に入り登録済みの場合（fav.png = 登録済み）
    const favIcon = document.querySelector('img.fav-btn[src$="fav.png"]');

    if (unfavIcon) {
        console.log("お気に入り未登録です。クリックして登録します。");
        unfavIcon.click();
    } else if (favIcon) {
        console.log("このユーザーはすでにお気に入りに登録されています。クリックは不要です。");
        return;
    } else {
        console.log("お気に入りボタンが見つかりませんでした。");
    }
})();
