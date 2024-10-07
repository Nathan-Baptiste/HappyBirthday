// Array of song objects with source, title, and cover image
const songs = [
    {
        src: 'music/Harry Styles - Late Night Talking (Audio).mp3',
        title: 'Late Night Talking - Harry Styles',
        image: 'musicimg/harry2.png'
    },
    {
        src: 'music/Harry Styles - Music For a Sushi Restaurant (Audio).mp3',
        title: 'Music For a Sushi Restaurant - Harry Styles',
        image: 'musicimg/harry1.png'
    },
    {
        src: 'music/Benson Boone - Beautiful Things (Official Lyric Video).mp3',
        title: 'Beautiful Things - Benson Boone',
        image: 'musicimg/bt1.png'
    },
    {
    src: 'music/Bruno Mars - The Lazy Song (Lyrics).mp3',
        title: 'The Lazy Song - Bruno Mars',
        image: 'musicimg/bm1.jpg'
    },
    {
        src: 'music/Vance Joy - Riptide (Lyrics).mp3',
            title: 'Riptide - Vance Joy',
            image: 'musicimg/vj1.png'
    },
    {
        src: 'music/One Direction - Night Changes (Lyrics).mp3',
            title: 'Night Changes - One Direction',
            image: 'musicimg/od1.png'
    },
    {
        src: 'music/The Black Eyed Peas - I Gotta Feeling (Lyrics).mp3',
            title: 'I Gotta Feeling - The Black Eyed Peas',
            image: 'musicimg/I_Gotta_Feeling.png'
    },
    {
        src: 'music/One Direction - Story of My Life.mp3',
            title: 'Story of My Life - One Direction',
            image: 'musicimg/od2.png'
    },
    {
        src: 'music/Sia - Chandelier (Lyrics).mp3',
            title: 'Chandelier - Sia',
            image: 'musicimg/sc1.png'
    },
    {
        src: 'music/Harry Styles - Adore You (Official Audio).mp3',
            title: 'Adore You - Harry Styles',
            image: 'musicimg/ay.png'
    },
    {
        src: "music/OneRepublic - I Ain't Worried (Lyrics).mp3",
            title: "I Ain't Worried - One Republic",
            image: 'musicimg/or.jpg'
    },
    {
        src: 'music/Maroon 5 - Girls Like You (Lyrics) ft. Cardi B.mp3',
            title: 'Girls Like You - Maroon 5 ft. Carbi B',
            image: 'musicimg/gly.png'
    },
    {
        src: 'music/Harry Styles - As It Was (Lyrics).mp3',
            title: 'As It Was - Harry Styles',
            image: 'musicimg/asitwas.png'
    }
];

let currentSongIndex = 0;

// Function to update player with current song details
function updatePlayer() {
    audioPlayer.src = songs[currentSongIndex].src;
    coverImage.src = songs[currentSongIndex].image;
    songTitle.textContent = songs[currentSongIndex].title;
}

// Initialize confetti and media player on page load
window.onload = function() {
    // Launch confetti
    confetti({
        particleCount: 100,
        angle: 60,
        spread: 70,
        startVelocity: 75,
        origin: { x: 0, y: 1 }
    });

    confetti({
        particleCount: 100,
        angle: 120,
        spread: 70,
        startVelocity: 75,
        origin: { x: 1, y: 1 }
    });

    setInterval(function() {
        confetti({
            particleCount: 20,
            angle: 90, 
            spread: 100,
            startVelocity: 20,
            gravity: 1,
            ticks: 200, 
            origin: { x: Math.random(), y: 0 } 
        });
    }, 200);

    // Initialize the audio player
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const coverImage = document.getElementById('coverImage');
    const songTitle = document.getElementById('songTitle');

    updatePlayer(); // Set initial song details
    audioPlayer.play(); // Start playing the first song
    playPauseBtn.textContent = 'Pause'; // Set initial button text to Pause

    // Play/Pause Button functionality
    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Play the next song
    nextBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        updatePlayer();
        audioPlayer.play(); // Automatically play the next song
        playPauseBtn.textContent = 'Pause'; // Update button text
    });

    // Play the previous song
    prevBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        updatePlayer();
        audioPlayer.play(); // Automatically play the previous song
        playPauseBtn.textContent = 'Pause'; // Update button text
    });
};
