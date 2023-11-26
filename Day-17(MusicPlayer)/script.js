const music = document.querySelector("audio");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const img = document.querySelector("img");
let isplaying = false;

const songs = [
  {
    name: "music/Never Again.mp3",
    title: "Never Again",
    artist: "Prem Dhillon",
    image: "images/photo-1.webp",
  },
  {
    name: "music/Stargaze.mp3",
    title: "Stargaze",
    artist: "Prem Dhillon",
    image: "images/photo-2.webp",
  },
];

function playmusic() {
  music.play();
  isplaying = true;
  play.classList.replace("ri-play-circle-line", "ri-pause-circle-line");
  img.classList.add("anime");
}
function pausemusic() {
  music.pause();
  isplaying = false;
  play.classList.replace("ri-pause-circle-line", "ri-play-circle-line");
  img.classList.remove("anime");
}

play.addEventListener("click", () => {
  if (isplaying == false) {
    playmusic();
  } else {
    pausemusic();
  }
});

const loadsong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = songs.name;
  img.src = songs.image;
};
songindex = 0;
const nextsong = () => {
  songindex = (songindex + 1) % songs.length;
  loadsong(songs[songindex]);
  playmusic();
};
const prevsong = () => {
  songindex = (songindex - 1 + songs.length) % songs.length;
  loadsong(songs[songindex]);
  prevmusic();
};

next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong);
