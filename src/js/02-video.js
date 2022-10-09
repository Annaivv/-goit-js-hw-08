import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', e => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
});

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0
);
