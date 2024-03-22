const formEl = document.getElementById("form-tech");
const name1 = document.getElementById("name-1");
const name2 = document.getElementById("name-2");
const name3 = document.getElementById("name-3");
const name4 = document.getElementById("name-4");
const name5 = document.getElementById("name-5");
const groupHistory = document.getElementById("group-history");

formEl.addEventListener("submit", async e => {
    e.preventDefault();

    const payload = {
        names: [name1.value, name2.value, name3.value, name4.value, name5.value],
        message: groupHistory.value
    };

    console.log(payload);

    try {
        const response = await fetch("https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("Dados enviados com sucesso!");
        }

    } catch (e) {
        console.log("Could not send data to the api!", e.message);
    }
})