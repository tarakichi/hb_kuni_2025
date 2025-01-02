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
        html: "三文字目は<br><strong style='color: white; font-size: 3rem;'>飛</strong>",
      });
    }
  });
}