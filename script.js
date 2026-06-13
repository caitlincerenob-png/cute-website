function checkPassword() {

    const password = document.getElementById("password").value;

    if (password === "0") {

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("menuPage").style.display = "flex";

    } else {
        document.getElementById("error").innerHTML = "Wrong password baby! 💔";
    }
}

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });

    document.getElementById(pageId).style.display = "flex";
}

function backToMenu() {

    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });

    document.getElementById("menuPage").style.display = "flex";
}

/* 🎉 SURPRISE + CONFETTI */
function showSurprise() {

    showPage("surprisePage");

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        confetti({
            particleCount: 120,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });
    }, 300);

    setTimeout(() => {
        confetti({
            particleCount: 120,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });
    }, 300);
}