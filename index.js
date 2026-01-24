function toggleShare() {
    const shareBar = document.getElementById('share-bar');
    const authorBar = document.getElementById('author-bar');

    shareBar.classList.toggle('hidden');
    authorBar.classList.toggle('hidden');


    shareBar.classList.toggle('flex');
}