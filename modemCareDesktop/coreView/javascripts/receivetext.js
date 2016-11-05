var TextReceiver = (function () {
    var receivers;

    function onReceive(recvPayload, recvObj) {
        recvObj.content = Quiet.mergeab(recvObj.content, recvPayload);
        recvObj.target.textContent = Quiet.ab2str(recvObj.content);
        recvObj.successes++;
        var total = recvObj.failures + recvObj.successes
        var ratio = recvObj.failures / total * 100;
        recvObj.warningbox.textContent = "You may need to move the transmitter closer to the receiver and set the volume to 50%. Packet Loss: " + recvObj.failures + "/" + total + " (" + ratio.toFixed(0) + "%)";
    };

    function onReceiverCreateFail(reason, recvObj) {
        console.log("failed to create quiet receiver: " + reason);
        recvObj.warningbox.classList.remove("hidden");
        recvObj.warningbox.textContent = "Sorry, it looks like this example is not supported by your browser. Please give permission to use the microphone or try again in Google Chrome or Microsoft Edge."
    };

    function onReceiveFail(num_fails, recvObj) {
        recvObj.warningbox.classList.remove("hidden");
        recvObj.failures = num_fails;
        var total = recvObj.failures + recvObj.successes
        var ratio = recvObj.failures / total * 100;
        recvObj.warningbox.textContent = "You may need to move the transmitter closer to the receiver and set the volume to 50%. Packet Loss: " + recvObj.failures + "/" + total + " (" + ratio.toFixed(0) + "%)";
    };

    function onClick(e, recvObj) {
        e.target.disabled = true;
        var originalText = e.target.innerText;
        e.target.innerText = e.target.getAttribute('data-quiet-receiving-text');
        e.target.setAttribute('data-quiet-receiving-text', originalText);

        var receiverOnReceive = function (payload) { onReceive(payload, recvObj); };
        var receiverOnReceiverCreateFail = function (reason) { onReceiverCreateFail(reason, recvObj); };
        var receiverOnReceiveFail = function (num_fails) { onReceiveFail(num_fails, recvObj); };
        Quiet.receiver({
            profile: recvObj.profilename,
            onReceive: receiverOnReceive,
            onCreateFail: receiverOnReceiverCreateFail,
            onReceiveFail: receiverOnReceiveFail
        });

        recvObj.target.classList.remove('hidden');
    }

    function setupReceiver(receiver) {
        var recvObj = {
            profilename: receiver.getAttribute('data-quiet-profile-name'),
            btn: receiver.querySelector('[data-quiet-receive-text-button]'),
            target: receiver.querySelector('[data-quiet-receive-text-target]'),
            warningbox: receiver.querySelector('[data-quiet-receive-text-warning]'),
            successes: 0,
            failures: 0,
            content: new ArrayBuffer(0)
        };
        var onBtnClick = function (e) { return onClick(e, recvObj); };
        recvObj.btn.addEventListener('click', onBtnClick, false);
    };

    function onQuietReady() {
        for (var i = 0; i < receivers.length; i++) {
            setupReceiver(receivers[i]);
        }
    };

    function onQuietFail(reason) {
        console.log("quiet failed to initialize: " + reason);
        var warningbox = document.querySelector('[data-quiet-receive-text-warning]');
        warningbox.classList.remove("hidden");
        warningbox.textContent = "Sorry, it looks like there was a problem with this example (" + reason + ")";
    };

    function onDOMLoad() {
        receivers = document.querySelectorAll('[data-quiet-receive-text]');
        Quiet.addReadyCallback(onQuietReady, onQuietFail);
    };

    document.addEventListener("DOMContentLoaded", onDOMLoad);
})();

var initReceiver = function () {
    var recvObj = {
        profilename: "audible",
        successes: 0,
        failures: 0,
        content: new ArrayBuffer(0)
    };


    var receiverOnReceive = function (payload) { onReceive(payload, recvObj); };
    var receiverOnReceiverCreateFail = function (reason) { onReceiverCreateFail(reason, recvObj); };
    var receiverOnReceiveFail = function (num_fails) { onReceiveFail(num_fails, recvObj); };

    var audibleProfile = {
        "checksum_scheme": "crc32",
        "inner_fec_scheme": "v27",
        "outer_fec_scheme": "none",
        "mod_scheme": "gmsk",
        "frame_length": 25,
        "modulation": {
            "center_frequency": 4200,
            "gain": 0.15
        },
        "interpolation": {
            "samples_per_symbol": 10,
            "symbol_delay": 4,
            "excess_bandwidth": 0.35
        },
        "encoder_filters": {
            "dc_filter_alpha": 0.01
        },
        "resampler": {
            "delay": 13,
            "bandwidth": 0.45,
            "attenuation": 60,
            "filter_bank_size": 64
        }

    }

    function onReceive(recvPayload, recvObj) {
        var content = Quiet.ab2str(recvPayload);
        ringAnimation();
        console.log(content);
        recvObj.successes++;
        var total = recvObj.failures + recvObj.successes
        var ratio = recvObj.failures / total * 100;
        console.log("You may need to move the transmitter closer to the receiver and set the volume to 50%. Packet Loss: " + recvObj.failures + "/" + total + " (" + ratio.toFixed(0) + "%)");
    };

    function ringAnimation(){
        document.getElementById("mainIcon").classList += " faa-ring animated";
        setTimeout(function(){
            document.getElementById("mainIcon").classList = "fa fa-stethoscope";
        }, 2000)
    }

    function onReceiverCreateFail(reason, recvObj) {
        console.log("failed to create quiet receiver: " + reason);
    };

    function onReceiveFail(num_fails, recvObj) {
        console.log("we failed fam");
        recvObj.failures = num_fails;
        var total = recvObj.failures + recvObj.successes
        var ratio = recvObj.failures / total * 100;
        console.log("You may need to move the transmitter closer to the receiver and set the volume to 50%. Packet Loss: " + recvObj.failures + "/" + total + " (" + ratio.toFixed(0) + "%)");
    };
    var audibleProfile = {
        "checksum_scheme": "crc32",
        "inner_fec_scheme": "v27",
        "outer_fec_scheme": "none",
        "mod_scheme": "gmsk",
        "frame_length": 25,
        "modulation": {
            "center_frequency": 4200,
            "gain": 0.15
        },
        "interpolation": {
            "samples_per_symbol": 10,
            "symbol_delay": 4,
            "excess_bandwidth": 0.35
        },
        "encoder_filters": {
            "dc_filter_alpha": 0.01
        },
        "resampler": {
            "delay": 13,
            "bandwidth": 0.45,
            "attenuation": 60,
            "filter_bank_size": 64
        }
    };
    


    var receiver = Quiet.receiver({
        profile: "audible",
        onReceive: receiverOnReceive,
        onCreateFail: receiverOnReceiverCreateFail,
        onReceiveFail: receiverOnReceiveFail
    });
    console.log("Receiver started!");
}

setTimeout(initReceiver, 2000);



