const listElm = document.getElementById("email-list");
const btnElmReset = document.getElementById("btn-reset");
const choiseElm = document.querySelector(".hidden")

function emailGeneretor () {
    listElm.innerHTML = "";

    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
            listElm.innerHTML += `
                <li class="email col-6 center">
                    <a href="">${resp.data.response} </a>
                </li>
                `
    })}
}

btnElmReset.addEventListener("click", function () {
    emailGeneretor();
    choiseElm.classList.remove("hidden");
    choiseElm.classList.add("block")

})
