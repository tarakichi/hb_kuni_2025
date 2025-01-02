function answerPz3() {
    Swal.fire({
        title: "解答を入力してください",
        input: "text",
    }).then((result) => {
        if (result.isConfirmed && result.value.toLowerCase() == "star") {
            Swal.fire({
                title: "よくやった",
                html: "三文字目は<br><strong style='color: white; font-size: 3rem;'>飛</strong>",
            });
        }
    });
}