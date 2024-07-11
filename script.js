document.addEventListener('DOMContentLoaded', function() {
    const playlist = [
        { title: "Count on me", artist: "Bruno Mars", cover: "cover1.jpeg", url: "song1.mp3" },
        { title: "Like I am gonna lose you", artist: "Meghan Trainor", cover: "cover2.jpeg", url: "song2.mp3" },
        { title: "Rewrite the stars", artist: "Zendaya & Zac Efron", cover: "cover3.jpeg", url: "song3.mp3" },
        { title: "All the ways", artist: "Meghan Trainor", cover: "cover4.jpeg", url: "song4.mp3" },
        { title: "Why I love you", artist: "MAJOR", cover: "cover5.jpeg", url: "song5.mp3" },
        { title: "L.O.V.E", artist: "Frank Sinatra", cover: "cover6.jpg", url: "song6.mp3" },
        { title: "This is me", artist: "The Greatest Showman", cover: "cover7.jpeg", url: "song7.mp3" },
        { title: "Scars to your beautiful", artist: "Alessia Cara", cover: "cover8.jpeg", url: "song8.mp3" },
        { title: "Just the way you are", artist: "Bruno Mars", cover: "cover9.jpeg", url: "song9.mp3" },
        { title: "Certain things", artist: "James Arthur", cover: "cover10.jpeg", url: "song10.mp3" },
        { title: "If You Love Her", artist: "Forest Blakk", cover: "cover11.jpeg", url: "song11.mp3" }
    ];

    const playlistElement = document.getElementById('playlist');
    let currentAudio = null;
    let currentButton = null;

    playlist.forEach(song => {
        if (!song.title || !song.artist || !song.cover || !song.url) {
            return; // Skip songs with missing properties
        }

        const listItem = document.createElement('li');

        const albumCover = document.createElement('img');
        albumCover.src = song.cover;
        albumCover.alt = `${song.title} cover`;

        const songInfo = document.createElement('div');
        songInfo.className = 'song-info';

        const songTitle = document.createElement('div');
        songTitle.className = 'song-title';
        songTitle.textContent = song.title;

        const songArtist = document.createElement('div');
        songArtist.className = 'song-artist';
        songArtist.textContent = song.artist;

        songInfo.appendChild(songTitle);
        songInfo.appendChild(songArtist);

        const playButton = document.createElement('button');
        playButton.textContent = 'Play';
        playButton.className = 'play-button';

        const audio = document.createElement('audio');
        audio.src = song.url;

        playButton.addEventListener('click', () => {
            if (currentAudio && currentAudio !== audio) {
                currentAudio.pause();
                currentButton.textContent = 'Play';
            }
            if (audio.paused) {
                audio.play();
                playButton.textContent = 'Pause';
            } else {
                audio.pause();
                playButton.textContent = 'Play';
            }
            currentAudio = audio;
            currentButton = playButton;
        });

        audio.addEventListener('pause', () => {
            playButton.textContent = 'Play';
        });

        audio.addEventListener('play', () => {
            playButton.textContent = 'Pause';
        });

        listItem.appendChild(albumCover);
        listItem.appendChild(songInfo);
        listItem.appendChild(playButton);
        listItem.appendChild(audio);
        playlistElement.appendChild(listItem);
    });

    console.log('Playlist rendered:', playlistElement);
});
