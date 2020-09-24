const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
//ボタンをクリックしたときのやつ
assessmentButton.onclick = () => {
    const username = (<HTMLInputElement>userNameInput).value
    console.log("button clicked")
    if (username.length == 0) return

    // 診断結果表示エリアの作成
    removeAllChild(resultDivided)
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(username);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
}
const answers: string[] = [
    '{username}unk',
    '{username}tnk'
];

function removeAllChild(parent: HTMLElement) {
    while (parent.firstChild) {
    // 子どもの要素があるかぎり削除
    parent.removeChild(parent.firstChild);
    }
}

function assessment(username: string): string {
    // 全文字のコード番号を取得してそれを足し合わせる
    const sumOfCharCode: number = username.split("").map(i => i.charCodeAt(0)).reduce((acc, v) => { return acc + v }, 0);

    const index = sumOfCharCode % answers.length;
    const answer = answers[index].replace(/\{username\}/g, username);

    return answer
}