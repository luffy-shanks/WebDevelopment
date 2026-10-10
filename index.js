const users = [
    {
        name: "John Doe",
        image: "john.png",
        gender: "male"
    },
    {
        name: "Jane Doe",
        image: "jane.png",
        gender: "female"
    }
];

let currentUserIndex = 0;

function toggleUser() {
    const image = document.querySelector(".card img");
    const name = document.querySelector(".card h2");
    const sex = document.querySelector(".card p");

    if (currentUserIndex === 0) {
        currentUserIndex = 1;
    } else {
        currentUserIndex = 0;
    }

    const currentUser = users[currentUserIndex];

    image.src = currentUser.image;
    image.alt = currentUser.name;
    name.textContent = currentUser.name;
    sex.textContent = currentUser.gender;
}
function randomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const image = document.querySelector(".card img");
            const name = document.querySelector(".card h2");
            const gender = document.querySelector(".card p");

            image.src = user.picture.large;
            image.alt = `${user.name.first} ${user.name.last}`;
            name.textContent = `${user.name.first} ${user.name.last}`;
            gender.textContent = user.gender;
        })
        .catch(error => {
            console.log("Something went wrong:", error);
        });
}
