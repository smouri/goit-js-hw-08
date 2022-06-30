import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);
console.log(player);
const currentTime = (data) =>
    localStorage.setItem("videoplayer-current-time", data.seconds);
player.on("timeupdate", throttle(currentTime, 1000));
const localStorageTime = localStorage.getItem("videoplayer-current-time");
if (localStorageTime) {
    player.setCurrentTime(localStorageTime);
}