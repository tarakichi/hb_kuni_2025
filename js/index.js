const targetDate = new Date("2025-01-04T00:00:00");

function start() {
    const now = new Date();
    if (now < targetDate) {
        Swal.fire({
            icon: "warning",
            title: "おっとっと。",
            text: "誕生日になってもいないのに開けると思うな",
            confirmButtonText: "OK",
        });
    } else {
        window.location.href = "menu.html"
    }
}