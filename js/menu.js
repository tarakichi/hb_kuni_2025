function last() {
  Swal.fire({
    title: "最後の答えは？",
    text: "答えましょう",
    icon: "question",
    input: "text",
  }).then((result) => {
    if (result.isConfirmed && result.value == "景雲飛") {
      Swal.fire({
        title: "よくやった",
        html: "",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "clear.html";
        }
      });
    }
  });
}