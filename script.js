document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    const musicToggleBtn = document.getElementById('music-toggle-btn');
    const albumContainer = document.querySelector('.album-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentPhotoIndex = 0;
    const totalPhotos = document.querySelectorAll('.photo-card').length;

    // Tenta reproduzir a música automaticamente. Se falhar, exibe a mensagem de play/pause
    music.play().then(() => {
        musicToggleBtn.textContent = '♪ Pause';
    }).catch(() => {
        // Reprodução automática bloqueada
        musicToggleBtn.textContent = '♪ Play';
    });

    musicToggleBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicToggleBtn.textContent = '♪ Pause';
        } else {
            music.pause();
            musicToggleBtn.textContent = '♪ Play';
        }
    });

    const updateAlbumPosition = () => {
        const offset = -currentPhotoIndex * 100;
        albumContainer.style.transform = `translateX(${offset}%)`;
    };

    prevBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex > 0) ? currentPhotoIndex - 1 : totalPhotos - 1;
        updateAlbumPosition();
    });

    nextBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex < totalPhotos - 1) ? currentPhotoIndex + 1 : 0;
        updateAlbumPosition();
    });
});