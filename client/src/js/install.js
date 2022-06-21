const butInstall = document.getElementById('buttonInstall');

// Event handler to 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// Listener fires when the user clicks the "install" button.
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();

    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Handler for 'appinstall' event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});