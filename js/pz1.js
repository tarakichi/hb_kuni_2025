function answerPz1() {
    Swal.fire({
        title: "解答を入力してください",
        input: "text",
    }).then((result) => {
        if (result.isConfirmed && result.value.toLowerCase() == "fortune") {
            Swal.fire({
                title: "よくやった",
            });
        }
    });
}