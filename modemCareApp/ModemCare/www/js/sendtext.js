var TextTransmitter = (function () {

})();

document.onload = function () {
    console.log("FUCK");


}
function initTransmitter() {
    var onFinish = function () { console.log("finished transmitting!") };
    var transmit = Quiet.transmitter({ profile: "audible", onFinish: onFinish });
    sendText("Hello World!");
}

function sendText(string) {
    console.log("Attempting to send text: " + string);
    transmit.transmit(Quiet.str2ab(str));
}
console.log("Script loaded!");
