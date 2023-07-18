console.log("Welcome to Spotify")

let songIndex= 0;
let audioElement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems= Array.from(document.getElementsByClassName('songItem'))
let masterSong = document.getElementById('masterSong')

let songs = [
    {songName: "Maan Meri Jaan", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Tere Hawaale", filePath:"song/2.mp3", coverPath:"cover/2.jpg"},
    {songName: "Deva Deva", filePath:"song/3.mp3", coverPath:"cover/3.jpg"},
    {songName: "Kun Faya Kun", filePath:"song/4.mp3", coverPath:"cover/4.jpg"},
    {songName: "Rang Lageya", filePath:"song/5.mp3", coverPath:"cover/5.jpg"},
    {songName: "Ranjha", filePath:"song/6.mp3", coverPath:"cover/6.jpg"},
    {songName: "Rasiya Reprise", filePath:"song/7.mp3", coverPath:"cover/7.jpg"},
    {songName: "Pasoori", filePath:"song/8.mp3", coverPath:"cover/8.jpg"},
    {songName: "In Dino se", filePath:"song/9.mp3", coverPath:"cover/9.jpg"},
    {songName: "Thode Kam Ajnabi", filePath:"song/10.mp3", coverPath:"cover/10.jpg"},
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//masterPlay
masterPlay.addEventListener('click', ()=>{
    // console.log("click")
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterSong.innerText=songs[songIndex].songName
    masterPlay.innerHTML='pause_circle';
    gif.style.opacity='1';

}
else{
    audioElement.pause();
    masterPlay.innerHTML='play_circle';
    gif.style.opacity='0';
}})

//myProgressBar
audioElement.addEventListener('timeupdate', ()=> {
   let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
//    console.log(progress)
   myProgressBar.value=progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =((myProgressBar.value * audioElement.duration)/100);
   
})

//makeallplay
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('playButton')).forEach((element)=>{
    element.innerText='play_circle'
    })
}

//playButton
Array.from(document.getElementsByClassName('playButton')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        songIndex=parseInt(e.target.id)
        // console.log(e.target);
        makeAllPlay();
        e.target.innerText='pause_circle';
        audioElement.src=`song/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterSong.innerText=songs[songIndex].songName
        masterPlay.innerHTML='pause_circle';
        gif.style.opacity='1';
    })
})

//nextbutton
document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    console.log(songIndex)
    audioElement.src=`song/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterSong.innerText=songs[songIndex].songName
    masterPlay.innerHTML='pause_circle';
    gif.style.opacity='1';
})

//previousbutton
document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex -= 1;
    }
    console.log(songIndex)
    audioElement.src=`song/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterSong.innerText=songs[songIndex].songName
    masterPlay.innerHTML='pause_circle';
    gif.style.opacity='1';
})
