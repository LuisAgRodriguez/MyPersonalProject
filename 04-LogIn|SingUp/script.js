const LogInSingUp = document.getElementById("Log-In-Sing-Up");
const title = document.getElementById("title")
const changeLogSing = document.getElementById("change-log-sing");
const imgButtonImg = document.querySelector(".img-button img");
const imgButton = document.querySelector(".img-button");
const contentLogIn = document.querySelector(".content-log-in");
const contentSingUp = document.querySelector(".content-sing-up");

let changeValor = true;


changeLogSing.addEventListener("click", () => {
    if(changeValor) {
        contentLogIn.style.display = "none";
        contentSingUp.style.display = "flex";
        title.textContent = "Crear Cuenta";
        changeLogSing.textContent = "Inicia Sesión"
        LogInSingUp.style.height = "78vh";
        LogInSingUp.style.width = "920px"
        imgButton.style.height = "70vh";
        imgButton.style.width = "460px";
        imgButtonImg.style.height = "70vh";
        imgButtonImg.style.width = "460px"
        changeValor = false;
    } else {
        contentLogIn.style.display = "flex";
        contentSingUp.style.display = "none";
        title.textContent = "Inicia Sesión";
        changeLogSing.textContent = "Crear Cuenta";
        LogInSingUp.style.height = "62vh";
        imgButton.style.height = "56vh";
        imgButton.style.width = "425px";
        imgButtonImg.style.height = "56vh";
        imgButtonImg.style.width = "425px"
        changeValor = true;
    }
})