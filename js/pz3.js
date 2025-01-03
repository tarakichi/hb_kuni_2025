function answerPz3() {
    Swal.fire({
        title: "解答を入力してください",
        input: "text",
    }).then((result) => {
        if (result.isConfirmed && result.value.toLowerCase() == "star") {
            localStorage.setItem("pz3", "solved");
            Swal.fire({
                title: "よくやった",
                html: "三文字目は<br><strong style='color: white; font-size: 3rem;'>飛</strong>",
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
        "単語って何だろう",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}