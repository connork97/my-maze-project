var person = null;
    function init() {
        person = document.getElementById("person");
        person.style.position = "absolute";
        person.style.left = "165px";
        person.style.top = "125px";
    }

function movePersonRight() {
    const rightNumbers = person.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if (left < 1525) {
        person.style.left = `${left + 5}px`;
    }
}

function movePersonLeft() {
    const leftNumbers = person.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        person.style.left = `${left - 5}px`;
    }
}

function movePersonUp() {
    const topNumbers = person.style.top.replace("px", "");
    const top = parseInt(topNumbers, 10);

    if (top > 125) {
        person.style.top = `${top - 5}px`;
    }
}

function movePersonDown() {
    const bottomNumbers = person.style.top.replace("px", "");
    const top = parseInt(bottomNumbers, 10);

    if (top < 850) {
        person.style.top = `${top + 5}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        movePersonLeft();
    }
    if (e.key === "ArrowRight") {
        movePersonRight();
    }
    if (e.key === "ArrowUp") {
        movePersonUp();
    }
    if (e.key === "ArrowDown") {
        movePersonDown();
    }
});

window.onload = init;



 
    /*
    function getKeyAndMove(e) {
        var key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37: //left arrow key
                moveLeft();
                break;
            case 38: //Up arrow key
                moveUp();
                break;
            case 39: //right arrow key
                moveRight();
                break;
            case 40: //down arrow key
                moveDown();
                break;
        }
    }
window.onload = init;
/*    

    function moveLeft() {
        person.style.left = parseInt(person.style.left) - 5 + "px";
    }
    function moveUp() {
        person.style.top = parseInt(person.style.top) - 5 + "px";
    }

    function moveDown() {
        person.style.top = parseInt(person.style.top) + 5 + "px";
    }
    window.onload = init;




 Trying something else out but keeping the code below since I already altered it from when it was the dodger example from Flatiron

const person =  document.getElementById("person");

function movePersonLeft() {
    const leftNumbers = person.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        person.style.left = `${left - 1}px`;
    }
}

function movePersonRight() {
    const rightNumbers = person.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if (left < 3600) {
        person.style.left = `${left + 1}px`;
    }
}
*/
