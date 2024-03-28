// прыгающая овечка через дерево
const sheepjump = document.getElementById("sheepjump");
const tree = document.getElementById("tree");

document.addEventListener("click", function(event) {
    jump();
});

function jump () {
    if (sheepjump.classList != "jump"){
        sheepjump.classList.add("jump")
    }
    setTimeout(function(){
        sheepjump.classList.remove("jump")
    }, 700)
}

let isAlive = setInterval(function() {
    let sheepjumpTop =  parseInt(window.getComputedStyle(sheepjump).getPropertyValue("top"))
    let treeLeft =  parseInt(window.getComputedStyle(tree).getPropertyValue("left"))

    if (treeLeft < 50 && treeLeft > 0 && sheepjumpTop >= 140){
        // alert("Игра закончена")
    }
}, 10);