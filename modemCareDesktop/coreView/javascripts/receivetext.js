var initReceiver = function () {
    var recvObj = {
        profilename: "audible",
        successes: 0,
        failures: 0,
        textContent: "",
        content: new ArrayBuffer(0)
    };

document.medicalDocuments = {"documents":[]};
console.log(document.medicalDocuments);

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

    var timeOfLastUpdate;
    function onReceive(recvPayload, recvObj) {
        console.log("Got something!");
        timeOfLastUpdate = new Date().getTime();
        recvObj.textContent += Quiet.ab2str(recvPayload);
        var hasBeenUpdated = true;
        setTimeout(function(){ 
            var currentTime = new Date().getTime();
            if(currentTime - timeOfLastUpdate > 900){
                console.log("Finished listening!");
                console.log(recvObj.textContent);
                var medicalData = JSON.parse(recvObj.textContent);
                Window.medicalDocuments.push(medicalData);
                recvObj.textContent = "";
            }
        }, 1000);
        var content = Quiet.ab2str(recvPayload);
        ringAnimation();
        recvObj.successes++;
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



