const pianoKeys = document.querySelectorAll(".piano-keys .keys"),
volumeSilder = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio('tunes/a.wav');

const playTune = (key) =>{
    audio.src = `tunes/${key.wav}`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key=${key}]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150);

}

pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key);

    key.addEventListener("click", ()=>{
        playTune(key.dataset.key)
    });
});

const handleVoume = (e)=>{
    audio.volume = e.target.value;
}

const showHideKeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));

}

const pressedKey = (e)=>{
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSilder.addEventListener("input", handleVoume);
document.addEventListener("keydown",pressedKey)