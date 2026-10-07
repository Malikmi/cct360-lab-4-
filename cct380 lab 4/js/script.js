let pets = 0;

function petcat() {
    pets = pets +1;

    if (pets <= 2) {
        document.getElementById("message"). textContent = "The cat is purring! pet it";
    } else if (pets <= 4) {
        document.getElementById("message"). textContent = "The cat is getting annoyed! Stop petting it!";
    }else {
        document.getElementById("message"). textContent = "The cat is angry! It scratched you!";
    }
}

document.getElementById("petButton").addEventListener("click", petcat);