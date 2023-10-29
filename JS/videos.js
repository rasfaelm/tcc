function openModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const modalVideo = modal.querySelector('iframe');
    modalVideo.src = videoUrl;
    modal.style.display = 'block';

    const header = document.querySelector('header');
    header.classList.add('hidden-header');
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = modal.querySelector('iframe');
    modalVideo.src = '';
    modal.style.display = 'none';
    
    const header = document.querySelector('header');
    header.classList.remove('hidden-header');
}