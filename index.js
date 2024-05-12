const elements = {
    image: document.getElementById('cover'),
    title: document.getElementById('music-title'),
    artist: document.getElementById('music-artist'),
    currentTimeEl: document.getElementById('current-time'),
    durationEl: document.getElementById('duration'),
    progress: document.getElementById('progress'),
    playerProgress: document.getElementById('player-progress'),
    prevBtn: document.getElementById('prev'),
    nextBtn: document.getElementById('next'),
    playBtn: document.getElementById('play'),
    background: document.getElementById('bg-img'),
    volumeSlider: document.getElementById('volume-slider'),
    repeatBtn: document.getElementById('repeat'),
    searchInput: document.getElementById('search-input')
};

const music = new Audio();
let musicIndex = 0;
let isPlaying = false;
let isRepeat = false;

window.addEventListener('load', () => {
    loadMusic(songs[musicIndex]);
});

const songs = [
    {
        path: 'assets/1.mp3',
        displayName: 'Juice WRLD DID',
        cover: 'assets/1.jpg',
        artist: 'DJ Khaled x Juice World',
    }, 
    {
        path: 'assets/2.mp3',
        displayName: 'UR THE MOON',
        cover: 'assets/2.jpg',
        artist: 'Playboi Carti',
    },
    {
        path: 'assets/3.mp3',
        displayName: 'Come Through',
        cover: 'assets/3.jpg',
        artist: 'The Weeknd',
    },
    {
        path: 'assets/4.mp3',
        displayName: 'FIFTY',
        cover: 'assets/4.jpg',
        artist: 'YEAT - [prod. R3DD x SHARKBOY]',
    },
    {
        path: 'assets/5.mp3',
        displayName: 'She Said Shes From The Islands',
        cover: 'assets/5.jpg',
        artist: 'Rarin x Frozy',
    },
    {
        path: 'assets/6.mp3',
        displayName: 'Lil Krazy',
        cover: 'assets/6.jpg',
        artist: 'YEAT - [prod. TRGC, Darkoivx, pooka]',
    },
    {
        path: 'assets/7.mp3',
        displayName: 'Faster Than Lightning',
        cover: 'assets/7.jpg',
        artist: 'DJ Steve Porter',
    },
    {
        path: 'assets/8.mp3',
        displayName: 'Cash Shit',
        cover: 'assets/8.jpg',
        artist: 'Playboi Carti',
    },
    {
        path: 'assets/9.mp3',
        displayName: '24 Songs',
        cover: 'assets/9.jpg',
        artist: 'Playboi Carti',
    },
    {
        path: 'assets/10.mp3',
        displayName: 'Southside',
        cover: 'assets/10.jpg',
        artist: 'Playboi Carti',
    },
    {
        path: 'assets/11.mp3',
        displayName: 'X',
        cover: 'assets/11.jpg',
        artist: 'Fedmate',
    },
    {
        path: 'assets/12.mp3',
        displayName: 'I LUV IT',
        cover: 'assets/12.jpg',
        artist: 'Playboi Carti',
    },
    {
        path: 'assets/13.mp3',
        displayName: 'SDP Interlude',
        cover: 'assets/13.jpeg',
        artist: 'Travis Scott',
    },
    {
        path: 'assets/14.mp3',
        displayName: 'Havana',
        cover: 'assets/14.jpg',
        artist: 'Young Thug',
    },
    {
        path: 'assets/15.mp3',
        displayName: 'Pop Out',
        cover: 'assets/15.jpg',
        artist: 'Playboi Carti'
    },
    {
        path: 'assets/16.mp3',
        displayName: 'Molly',
        cover: 'assets/16.jpg',
        artist: 'Playboi Carti'
    },
    {
        path: 'assets/17.mp3',
        displayName: 'Cancun',
        cover: 'assets/17.jpg',
        artist: 'Playboi Carti'
    },
    {
        path: 'assets/18.mp3',
        displayName: 'Mob Ties',
        cover: 'assets/18.jpg',
        artist: 'YEAT'
    },
    {
        path: 'assets/19.mp3',
        displayName: 'H00DBYAIR',
        cover: 'assets/19.jpg',
        artist: 'Playboi Carti'
    },
    {
        path: 'assets/20.mp3',
        displayName: 'Skeleton',
        cover: 'assets/20.jpg',
        artist: 'Playboi Carti'
    },
    {
        path: 'assets/21.mp3',
        displayName: '2024',
        cover: 'assets/8.jpg',
        artist: 'Playboi Carti'
    },
    {
        path: 'assets/22.mp3',
        displayName: 'It Smells Like Reefah Out Here',
        cover: 'assets/22.jpg',
        artist: 'Don Toliver'
    },
    {
        path: 'assets/23.mp3',
        displayName: 'Mention Me',
        cover: 'assets/23.jpg',
        artist: 'Drake'
    },
    {
        path: 'assets/24.mp3',
        displayName: 'Mission To The Loot',
        cover: 'assets/24.jpg',
        artist: 'Lil Uzi Vert'
    },
    {
        path: 'assets/25.mp3',
        displayName: 'Pissy Pamper',
        cover: 'assets/25.jpg',
        artist: 'Kid Cudi x Playboi Carti'
    },
    {
        path: 'assets/26.mp3',
        displayName: 'Molly My Bean',
        cover: 'assets/9.jpg',
        artist: 'Playboi Carti'
    },
    {
        path: 'assets/27.mp3',
        displayName: 'Yes You Can',
        cover: 'assets/27.jpg',
        artist: 'Young Thug'
    },
    {
        path: 'assets/28.mp3',
        displayName: 'Neva Changed',
        cover: 'assets/4.jpg',
        artist: 'YEAT'
    },
    {
        path: 'assets/29.mp3',
        displayName: 'Woke Up',
        cover: 'assets/29.jpg',
        artist: 'Gunna'
    },
    {
        path: 'assets/30.mp3',
        displayName: 'Evil',
        cover: 'assets/30.jpg',
        artist: 'Doov'
    },
    {
        path: 'assets/31.mp3',
        displayName: 'Still Here',
        cover: 'assets/31.jpg',
        artist: 'Lil Yachty'
    },
    {
        path: 'assets/32.mp3',
        displayName: 'Whole Lotta Red',
        cover: 'assets/32.jpg',
        artist: 'Playboi Carti'
    },
    {
        path: 'assets/33.mp3',
        displayName: 'Supervillain',
        cover: 'assets/33.jpg',
        artist: 'Playboi Carti'
    },
    {
        path: 'assets/34.mp3',
        displayName: 'WOK',
        cover: 'assets/34.jpg',
        artist: 'Playboi Carti'
    },
    {
        path: 'assets/35.mp3',
        displayName: 'President',
        cover: 'assets/35.jpg',
        artist: 'Destroy Lonely ft. Ken Carson'
    },
    {
        path: 'assets/36.mp3',
        displayName: 'Menage',
        cover: 'assets/36.jpg',
        artist: 'Lil Uzi Vert x Playboi Carti'
    }
];

function togglePlay() {
    isPlaying ? pauseMusic() : playMusic();
}

function playMusic() {
    isPlaying = true;
    elements.playBtn.classList.replace('fa-play', 'fa-pause');
    elements.playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    elements.playBtn.classList.replace('fa-pause', 'fa-play');
    elements.playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    elements.title.textContent = song.displayName;
    elements.artist.textContent = song.artist;
    elements.image.src = song.cover;
    elements.background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    elements.progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    elements.durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    elements.currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = elements.playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    elements.repeatBtn.classList.toggle('active', isRepeat);
}

function playNextSong() {
    isRepeat ? (music.currentTime = 0, music.play()) : changeMusic(1);
}

function searchSongs() {
    const searchTerm = elements.searchInput.value.toLowerCase();
    const filteredSongs = songs.filter(song =>
        song.displayName.toLowerCase().includes(searchTerm) ||
        song.artist.toLowerCase().includes(searchTerm)
    );

    if (filteredSongs.length > 0) {
        musicIndex = songs.findIndex(song => song === filteredSongs[0]);
        loadMusic(filteredSongs[0]);
        playMusic();
    }
}

// Event listeners
elements.playBtn.addEventListener('click', togglePlay);
elements.prevBtn.addEventListener('click', () => changeMusic(-1));
elements.nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', playNextSong);
music.addEventListener('timeupdate', updateProgressBar);
elements.playerProgress.addEventListener('click', setProgressBar);
elements.volumeSlider.addEventListener('input', () => {
    const volume = elements.volumeSlider.value / 100;
    music.volume = volume;
});
elements.repeatBtn.addEventListener('click', toggleRepeat);
elements.searchInput.addEventListener('input', searchSongs);


