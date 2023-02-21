window.addEventListener("load", start);
function start() {
  console.log("start");
  document.querySelector("#orange_container").classList.add("move");
}

function clickOrange() {
  document.querySelector("#orange_container").classList.add("paused");
    document.querySelector("#orange_sprite").classList.add("jump");

}

document
  .querySelector("#orange_container")
  .addEventListener("click", clickOrange);



document.querySelector("organge_sprite").addEventListener("click", jump);
