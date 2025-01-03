const pz1 = localStorage.getItem("pz1") === "solved";
const pz2 = localStorage.getItem("pz2") === "solved";
const pz3 = localStorage.getItem("pz3") === "solved";
const isSolved = (pz) => `${pz ? "クリア済" : "未クリア"}`;
function last() {
  if(pz1 && pz2 && pz3) {
    Swal.fire({
      title: "最後の答えは？",
      text: "答えましょう",
      icon: "question",
      input: "text",
    }).then((result) => {
      if (result.isConfirmed && result.value == "景雲飛") {
        Swal.fire({
          title: "よくやった！",
          html: "",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "clear.html";
          }
        });
      }
    });
  } else {
    Swal.fire({
      title: "三つの謎を解け",
      html: `<p>謎1:${isSolved(pz1)}</p>
      <p>謎2:${isSolved(pz2)}</p>
      <p>謎3:${isSolved(pz3)}</p>`,
    })
  }
}