function answerPz1() {
    Swal.fire({
        title: "解答を入力してください",
        input: "text",
    }).then((result) => {
        if (result.isConfirmed && result.value.toLowerCase() == "fortune") {
            localStorage.setItem("pz1", "solved");
            Swal.fire({
                title: "よくやった",
                html: "一文字目は<br><strong style='color: white; font-size: 3rem;'>景</strong>",
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
        "納豆に意味はないよ"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}