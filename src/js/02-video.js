import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


    
const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');
const savedTimer = localStorage.getItem('videoplayer-current-time') || 0;
console.log(savedTimer);
player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
    
};
player.setCurrentTime(savedTimer)