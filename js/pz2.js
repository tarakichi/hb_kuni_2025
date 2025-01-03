function answerPz2() {
    Swal.fire({
        title: "解答を入力してください",
        input: "text",
    }).then((result) => {
        if (result.isConfirmed && result.value.toLowerCase() == "muscle") {
            localStorage.setItem("pz2", "solved");
            Swal.fire({
                title: "よくやった",
                html: "二文字目は<br><strong style='color: white; font-size: 3rem;'>雲</strong>",
            });
        } else if (result.isConfirmed && result.value.toLowerCase() == "airport") {
            Swal.fire({
                title: "短絡的",
                html: `そのまま書くわけねえだろ`,
                icon: "error",
            });
        } else {
            Swal.fire({
                title: "不正解",
                html: `${message()}`,
                icon: "error",
            });
        }
    });
}
function message() {
    const messages = [
        "何やってんの？",
        "今日はいい日ですね！",
        "ばーか",
        "頑張ってください！",
        "素晴らしいアイデアですね！",
        "www",
        "ヒント:airport"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}