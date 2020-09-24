const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
//ボタンをクリックしたときのやつ
assessmentButton.onclick = () => {
    const username = userNameInput.nodeValue
    console.log("button clicked")
}
const answers: string[] = [
    '{username}unk',
    '{username}tnk'
];

function assessment(username: string): string {
    // 全文字のコード番号を取得してそれを足し合わせる
    const sumOfCharCode: number = username.split("").map(i => i.charCodeAt(0)).reduce((acc,v) => {return acc + v}, 0);

    const index = sumOfCharCode % answers.length;
    const answer = answers[index].replace(/\{username\}/g, username);

    return answer
}