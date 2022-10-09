import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(setTime, 1000));

function setTime(e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0
);
