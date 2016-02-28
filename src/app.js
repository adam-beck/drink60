import './styles.css';

var btn = document.getElementById('getSong');
var audio = document.getElementById('audio')
var songTitleDisplay = document.getElementById('songTitle');
var songArtistDispay = document.getElementById('songArtist');

var playCount = 0;
var playCountElement = document.getElementById('playCount');

var tracks = [];

var MAX_COUNT = 60;

btn.addEventListener('click', start);

function fetchSongs(cb) {
  var request = new XMLHttpRequest();
  request.open('GET', '/getSong', true);

  request.onload = function() {
    var data = JSON.parse(request.responseText);
    tracks = tracks.concat(data);

    if (cb) {
      cb(tracks);
    }
  };

  request.send();
}

function updateSongInformation(track) {
  songTitleDisplay.textContent = track.title;
  songArtistDispay.textContent = track.artist;

  playCountElement.textContent = playCount === 1 ? '1 song' : playCount + ' songs';
  playCount = playCount + 1;
}

function playSong(audioElement, track, timeout) {
  setTimeout(function() {
    fetchSongs(function() {
      updateSongInformation(track);
      audioElement.src = track.url;
      audioElement.load();
      audioElement.play();
      if (playCount <= MAX_COUNT) {
        playSong(audioElement, tracks.shift(), 5 * 1000);
      } else {
        audioElement.pause();
        audioElement.src = '';

        var endTrack = {
          title: 'YOU FINISHED',
          artist: 'CONGRATULATIONS!'
        };

        songTitleDisplay.textContent = endTrack.title
        songArtistDispay.textContent = endTrack.artist;

      }
    });

  }, timeout);
}

function start() {
  fetchSongs(function(tracks) {
    playSong(audio, tracks.shift(), 0);
  });
}
