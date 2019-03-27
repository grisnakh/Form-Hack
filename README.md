# Form Hack

> This addon uses APIs that are available from Firefox 47 onwards.

## What it does

Displays a simple button in the menu bar that toggles hidden inputs in the active tab.

To display the button, the extension registers a [browserAction](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction) in the manifest.

A non-persistent background script will listen for tab events and update the browserAction icon correspondingly. It also listens for `browserAction.onClicked` events to show or hide the hidden inputs when the user has clicked the icon.

The addon can be found here (https://addons.mozilla.org/en-US/firefox/addon/form-hack/). 
