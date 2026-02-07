const shareBtn = document.getElementById('shareBtn');
const closeBtn = document.getElementById('closeBtn');
const shareBar = document.getElementById('share-bar');
const authorBar = document.getElementById('author-bar');
const shareIcon = shareBtn?.querySelector('img');
const mobileQuery = window.matchMedia('(max-width: 767px)');

function setShare(open) {
    if (!shareBar || !shareBtn || !authorBar) return;

    shareBar.classList.toggle('hidden', !open);
    shareBtn.classList.toggle('bg-desaturated-dark-blue', open);
    shareBtn.classList.toggle('hover:bg-grayish-blue', !open);
    shareBtn.classList.toggle('hover:bg-desaturated-dark-blue', open);
    shareIcon?.classList.toggle('brightness-200', open);

    const hideAuthor = open && mobileQuery.matches;
    authorBar.classList.toggle('opacity-0', hideAuthor);
    authorBar.classList.toggle('pointer-events-none', hideAuthor);

    shareBtn.setAttribute('aria-expanded', String(open));
}

function toggleShare() {
    const isOpen = !shareBar.classList.contains('hidden');
    setShare(!isOpen);
}

shareBtn?.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleShare();
});

closeBtn?.addEventListener('click', (event) => {
    event.stopPropagation();
    setShare(false);
});

// Close when clicking outside on desktop
window.addEventListener('click', (event) => {
    if (!shareBar || shareBar.classList.contains('hidden')) return;
    const target = event.target;
    if (target instanceof Node && !shareBar.contains(target) && !shareBtn.contains(target)) {
        setShare(false);
    }
});

// Reset to closed state when switching between mobile/desktop layouts
mobileQuery.addEventListener('change', () => setShare(false));
