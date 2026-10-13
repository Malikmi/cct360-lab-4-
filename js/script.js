
let cat = {
    name: "Mochi",
    pets: 0,
    purrs: 0,
    scratches: 0,
    treats: 3,
    isAngry: false,
    gameOver: false
};
 
let catFace= document.getElementById("cat");
let message = document.getElementById("message");
let moodFill = document.getElementById("moodFill");
let purrsText = document.getElementById("purrs");
let scratchesText = document.getElementById("scratches");
let treatsText= document.getElementById ("treats");
let petButton = document.getElementById("petButton");
let treatButton = document.getElementById("treatButton");
let resetButton = document.getElementById("resetButton");
 
 
function updateCat () {
    if (cat.pets === 0) {
        catFace. textContent = "🐱";
        message .textContent= "okay, you can pet me";
        document.body.style.backgroundColor = "#fff0e5";
        moodFill.style.backgroundColor = "#7bc96f";
        cat.isAngry = false;
    } else if (cat.pets <= 2) {
        catFace.textContent = "😸";
        message.textContent = cat.name + " is purring! Keep going..";
        document.body.style.backgroundColor= "#eafbe7";
        moodFill.style.backgroundColor = "#7bc96F";
        cat.isAngry = false;
     } else if (cat.pets <= 4) {
        catFace.textContent = " 😼";
        message.textContent = cat.name + " is getting annoyed! Careful!";
        document.body.style.backgroundColor = "#fff6d6";
        moodFill.style.backgroundColor = "#f2c14e";
        cat.isAngry = false;
    } else {
        catFace.textContent = "😾";
        message.textContent = cat.name + " is ANGRY! Stop petting it!";
        document.body.style.backgroundColor = "#ffe0e0";
        moodFill.style.backgroundColor = "#e85d5d";
        cat.isAngry = true;
    }
 
    let percent= (cat.pets/6) * 100;
    if (percent > 100) {
        percent = 100;
    }
    moodFill.style.width = percent + "%";
    
    purrsText.textContent = cat.purrs;
    scratchesText.textContent=cat.scratches;
    treatsText.textContent= cat.treats;
 
    console.log ("Cat state:", cat);
}
 
function checkGameOver () {
    if (cat.purrs >= 10) {
        cat.gameOver = true;
        catFace.textContent ="😻";
        message.textContent = "You and " + cat.name + " are best friends now!" ;
        document.body.style.backgroundColor= "#ffe3f3";
    }else if ( cat.scratches >= 3 ) {
        cat.gameOver = true; 
        catFace.textContent = "🙀";
        message.textContent = cat.name + " has had enough and ran away. Game over!";
        document.body.style.backgroundColor= "#f3d4d4";
    }
    if (cat.gameOver) {
        petButton.disabled = true;
        treatButton.disabled = true;
        console.log( "Game over. Final state:", cat);
    }
}
    function petCat () {
        if (cat.gameOver) {
            return;
        }
          cat.pets= cat.pets + 1;
 
          if (cat.isAngry) {
            cat.scratches =cat.scratches + 1;
            updateCat ();
            message.textContent = "OUCH! " + cat.name + " scratched you!";
          } else if (cat.pets <= 2) {
            cat.purrs=cat.purrs +1 ;
            updateCat();
          } else { 
            updateCat ()
          }
          checkGameOver ();    
    }
 
    function giveTreat() {
    if (cat.gameOver) {
        return;
    }
 
    if (cat.treats <= 0) {
        message.textContent = "No treats left! Hit Reset to start over.";
        return;
    }
 
    cat.treats = cat.treats - 1;
    cat.pets = cat.pets - 3;
    if (cat.pets < 0) {
        cat.pets = 0;
    }
 
    updateCat();
    message.textContent = "Nom nom! " + cat.name + " calms down a bit. 🐟";
 
    if (cat.treats === 0) {
        treatButton.disabled = true;
    }
}
    function resetGame () {
        cat.pets= 0;
        cat.purrs= 0;
        cat.scratches =0;
        cat.treats =3;
        cat.isAngry = false;
        cat.gameOver = false;
 
 
        petButton.disabled = false;
        treatButton.disabled= false;
 
 
        updateCat();
        console.log ("Game reset");
    }
 
    petButton.addEventListener("click", petCat);
    catFace.addEventListener("click", petCat);
    treatButton.addEventListener("click", giveTreat);
    resetButton.addEventListener("click", resetGame)
 
    updateCat ()
 
 
 
