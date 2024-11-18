const listElm = document.getElementById("email-list");


for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
        listElm.innerHTML += `
            <li class="email">
                <a href="">${resp.data.response} </a>
            </li>
            `
})}


