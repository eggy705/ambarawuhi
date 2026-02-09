// Data Dummy seolah-olah dari API Spotify
const userData = {
    name: "ambaatubes pria sholoo wowok johan muani",
    topGenre: "Synthwave",
    topArtist: "The Weeknd",
    minutes: "24,890",
    recentSongs: [
        { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
        { title: "Hati-Hati di Jalan", artist: "Tulus", duration: "4:02" },
        { title: "Glimpse of Us", artist: "Joji", duration: "3:53" }
    ]
};

// Fungsi untuk memasukkan data ke HTML
function loadUserProfile() {
    document.getElementById('user-name').innerText = userData.name;
    document.getElementById('top-genre').innerText = userData.topGenre;
    document.getElementById('top-artist').innerText = userData.topArtist;
    document.getElementById('minutes').innerText = userData.minutes;

    const songList = document.getElementById('song-list');
    
    userData.recentSongs.forEach(song => {
        const div = document.createElement('div');
        div.className = 'song-item';
        div.innerHTML = `
            <div style="flex: 1;">
                <p><strong>${song.title}</strong></p>
                <p style="font-size: 0.8rem; color: #b3b3b3;">${song.artist}</p>
            </div>
            <span>${song.duration}</span>
        `;
        songList.appendChild(div);
    });
}

// Jalankan fungsi saat halaman dimuat
window.onload = loadUserProfile;
