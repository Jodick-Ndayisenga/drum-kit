function removeTransition(key){
    if(key.propertyName !== 'transform')return;
    this.classList.remove("playing");
}

function playSound(e) {
    const myKey = document.querySelector(`div[data-key=${e.key}]`)
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    myKey.classList.add("playing");
  };

const keys = document.querySelectorAll(".keys>div");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound)
