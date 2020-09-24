var userNameInput = document.getElementById('user-name');
var assessmentButton = document.getElementById('assessment');
var resultDivided = document.getElementById('result-area');
var tweetDivided = document.getElementById('tweet-area');
//ボタンをクリックしたときのやつ
assessmentButton.onclick = function () {
    var username = userNameInput.value;
    console.log("button clicked");
    if (username.length == 0)
        return;
    // 診断結果表示エリアの作成
    removeAllChild(resultDivided);
    var header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);
    var paragraph = document.createElement('p');
    var result = assessment(username);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
};
var answers = [
    '{username}unk',
    '{username}tnk'
];
function removeAllChild(parent) {
    while (parent.firstChild) {
        // 子どもの要素があるかぎり削除
        parent.removeChild(parent.firstChild);
    }
}
function assessment(username) {
    // 全文字のコード番号を取得してそれを足し合わせる
    var sumOfCharCode = username.split("").map(function (i) { return i.charCodeAt(0); }).reduce(function (acc, v) { return acc + v; }, 0);
    var index = sumOfCharCode % answers.length;
    var answer = answers[index].replace(/\{username\}/g, username);
    return answer;
}
