let guestBook = [];

function displayGuestBook() {
    const guestList = document.getElementById("guestList");
    guestList.innerHTML = "";
    guestBook.forEach((name, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = name;

        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteGuest(index);
        listItem.appendChild(deleteButton);

        guestList.appendChild(listItem);
    });
}

function addGuest(event) {
    event.preventDefault();
    const guestNameInput = document.getElementById("guestName");
    const guestName = guestNameInput.value.trim();

    if (guestName) {
        guestBook.push(guestName);
        guestNameInput.value = "";
        displayGuestBook();
    } else {
        alert("Please enter a name.");
    }
}

function deleteGuest(index) {
    guestBook.splice(index, 1);
    displayGuestBook();
}

document.getElementById("guestbookForm").addEventListener("submit", addGuest);