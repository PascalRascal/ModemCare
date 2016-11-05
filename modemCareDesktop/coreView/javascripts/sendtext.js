var TextTransmitter = (function() {
    
})();

document.onload = function(){
    console.log("FUCK");


}
function initTransmitter(){
            var onFinish = function() { console.log("finished transmitting!") };
var transmit = Quiet.transmitter({profile: "audible", onFinish: onFinish});
transmit.transmit(Quiet.str2ab("Just stopping by to say FUCK"));
console.log(transmit);
}


