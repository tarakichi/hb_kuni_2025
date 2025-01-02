function answerPz2() {
    Swal.fire({
        title: "解答を入力してください",
        input: "text",
    }).then((result) => {
        if (result.isConfirmed && result.value.toLowerCase() == "muscle") {
            Swal.fire({
                title: "よくやった",
                html: "二文字目は<br><strong style='color: white; font-size: 3rem;'>雲</strong>",
            });
        }
    });
}