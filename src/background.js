chrome.runtime.onConnect.addListener(function(port) {
    if (port.name !== 'SettingsProxy_') return;

    port.onMessage.addListener(function(options) {
        var settings = loadSettings();
        port.postMessage({ settings: settings });
    });
});
