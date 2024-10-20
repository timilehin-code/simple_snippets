(function() {
    const status = document.querySelector('.status');

    function updateOnlineStatus() {
        if (navigator.onLine) {
            status.textContent = 'You are online!';
            status.className = 'status online';
        } else {
            status.textContent = 'You are offline!';
            status.className = 'status offline';
        }
    }

    // Check the initial status
    if (status) {
        updateOnlineStatus();
    } else {
        console.error('Status element not found');
    }

    // Add event listeners to update status when online or offline status changes
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
})();