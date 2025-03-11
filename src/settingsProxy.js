var SETTINGS_PROXY_PORT_NAME_ = 'SettingsProxy_';

/**
 * Should be called by the content script.
 */
function proxySettings(options) 
{
    options = options || {};
    options.onComplete = options.onComplete || function(){};

    var port = chrome.runtime.connect({name: SETTINGS_PROXY_PORT_NAME_});
    port.onMessage.addListener(
	function(msg) 
	{
	    options.onComplete(msg.settings);
	});
    port.postMessage(options);
}