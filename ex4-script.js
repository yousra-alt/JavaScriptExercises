window.addEventListener("load", start);
function start() {
}


function jump() {
    document.querySelector("#orange_sprite").classList.add("jump-once");

}

function jumpdone () {
        document.querySelector("#orange_sprite").classList.remove("jump-once");

}


document.querySelector("#orange_sprite").addEventListener("animationend", jumpdone);
document.querySelector("#orange_sprite").addEventListener("click",jump);
