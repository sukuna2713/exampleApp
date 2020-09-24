var userNameInput = document.getElementById('user-name');
var assessmentButton = document.getElementById('assessment');
var resultDivided = document.getElementById('result-area');
var tweetDivided = document.getElementById('tweet-area');
//ボタンをクリックしたときのやつ
assessmentButton.onclick = function () {
    var username = userNameInput.nodeValue;
    console.log("button clicked");
};
var answers = [
    '{username}unk',
    '{username}tnk'
];
function assessment(username) {
    // 全文字のコード番号を取得してそれを足し合わせる
    var sumOfCharCode = username.split("").map(function (i) { return i.charCodeAt(0); }).reduce(function (acc, v) { return acc + v; }, 0);
    var index = sumOfCharCode % answers.length;
    var answer = answers[index].replace(/\{username\}/g, username);
    return answer;
}
