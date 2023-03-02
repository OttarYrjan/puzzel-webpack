import {connect} from '@puzzel/widget-api-lib';

class PuzzelStartUp {

    main() {

            const api = connect();

            onMessage('---> Connected');

            api.on('SYSTEM_USER_STATUS_CHANGED', onUserStatusChanged);
            api.on('SYSTEM_CALL_STATE_CHANGE', onCallStateChange);
            api.on('SYSTEM_STATE_UPDATED', onUserStatusUpdated);

    }
}
const textarea = document.querySelector("textarea.console");

function logTextArea(msg) {
    if (!textarea || !(textarea instanceof HTMLTextAreaElement)) {
        return;
    }

    textarea.textContent += msg + "\n";
    textarea.scrollTop = textarea.scrollHeight;
}

function onMessage(msg) {
    logTextArea(`onMessage: ${JSON.stringify(msg)}`);
}

function onUserStatusChanged(msg) {
    logTextArea(`onUserStatusUpdated: ${JSON.stringify(msg)}`);
}

function onCallStateChange(msg) {
    logTextArea(`onUserStatusUpdated: ${JSON.stringify(msg)}`);
}

function onUserStatusUpdated(msg) {
    logTextArea(`onUserStatusUpdated: ${JSON.stringify(msg)}`);
}

export default PuzzelStartUp;
