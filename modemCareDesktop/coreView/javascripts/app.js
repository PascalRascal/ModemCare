var medicalDocuments = []

var parseMedJSON = function (medJson) {

      var title = medJson.name;
      var description = medJson.description;
      var htmlString = `<div>  <div class= "text-center"> <h1> ` + title + `</h1>
                       </div>
                      <dl class="dl-horizontal">`
      for (var i = 0; i < medJson.fields.length; i++) {
        htmlString = htmlString + `<dt>` + medJson.fields[i].key + `</dt> 
        <dd>` + medJson.fields[i].value + `</dd>`
      }
      htmlString = htmlString + `</dl> </div>`
      return htmlString;
    }

angular.module('modemApp', [])

  .filter("trust", ['$sce', function ($sce) {
    return function (htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    }
  }])

  .controller('TheCtrl', function () {
    var todoList = this;


    todoList.showMain = true;
    

    var BasicIdentModel = [{
	"id": 0,
	"name": "Basic Identification Information",
	"isShared": true,
	"formData": {
		"name": "Basic Identification Information",
		"fields": [{
			"key": "First Name",
			"value": "michael"
		}, {
			"key": "Middle Name",
			"value": ""
		}, {
			"key": "Last Name",
			"value": "abbott"
		}, {
			"key": "Date of Birth (MM/DD/YYYY)",
			"value": "01/01/1987"
		}, {
			"key": "Street Address",
			"value": "1234 Whatever St."
		}, {
			"key": "Apartment #",
			"value": "116"
		}, {
			"key": "City/Town",
			"value": "Columbus"
		}, {
			"key": "State",
			"value": "OH"
		}, {
			"key": "Zipcode",
			"value": "12345"
		}, {
			"key": "Patient email address",
			"value": "person@place.com"
		}, {
			"key": "Home phone number",
			"value": "867-5309"
		}, {
			"key": "Cell phone number",
			"value": "867-5309"
		}]
	}
}, {
	"id": 1,
	"name": "Patient History",
	"isShared": true,
	"formData": {
		"name": "Patient History",
		"fields": [{
			"key": "Anemia",
			"value": "none"
		}, {
			"key": "Anorexia",
			"value": "none"
		}, {
			"key": "Arthritis",
			"value": "none"
		}, {
			"key": "Asthma",
			"value": "none"
		}, {
			"key": "Cancer",
			"value": "none"
		}, {
			"key": "Chicken pox",
			"value": "none"
		}, {
			"key": "Depression",
			"value": "none"
		}, {
			"key": "Diabetes",
			"value": "none"
		}, {
			"key": "Eating problems",
			"value": "none"
		}, {
			"key": "Epilepsy or seizures",
			"value": "none"
		}, {
			"key": "Heart disease",
			"value": "none"
		}, {
			"key": "High/low blood pressure",
			"value": "none"
		}, {
			"key": "Melanoma",
			"value": "none"
		}, {
			"key": "Menstrual problems",
			"value": "none"
		}, {
			"key": "Migraines",
			"value": "none"
		}, {
			"key": "Sexually transmitted disease",
			"value": "none"
		}, {
			"key": "Thyroid problems",
			"value": "none"
		}, {
			"key": "Other",
			"value": "none"
		}]
	}
}, {
	"id": 2,
	"name": "Child Past Medical History",
	"isShared": true,
	"formData": {
		"name": "Child Past Medical History",
		"fields": [{
			"key": "Asthma/wheezing",
			"value": "none"
		}, {
			"key": "Blood: anemia",
			"value": "none"
		}, {
			"key": "Blood transfusions",
			"value": "none"
		}, {
			"key": "Chicken pox (Varicella)",
			"value": "none"
		}, {
			"key": "Contusions",
			"value": "none"
		}, {
			"key": "Convulsions",
			"value": "none"
		}, {
			"key": "Fractures",
			"value": "none"
		}, {
			"key": "German Measles (Rubella)",
			"value": "none"
		}, {
			"key": "Hearing problems",
			"value": "none"
		}, {
			"key": "Hospitalizations",
			"value": "none"
		}, {
			"key": "Measles (Rubeola)",
			"value": "none"
		}, {
			"key": "Meningitis",
			"value": "none"
		}, {
			"key": "Mumps",
			"value": "none"
		}, {
			"key": "Operations",
			"value": "none"
		}, {
			"key": "Poison ingestion",
			"value": "none"
		}, {
			"key": "Temper tantrums",
			"value": "none"
		}, {
			"key": "Visual problems",
			"value": "none"
		}, {
			"key": "Other serious medical illnesses",
			"value": "none"
		}]
	}
}, {
	"id": 3,
	"name": "General Health Form",
	"isShared": true,
	"formData": {
		"name": "General Health Form",
		"fields": [{
			"key": "Reason for visit",
			"value": "appointment/checkup"
		}, {
			"key": "Insurance provider",
			"value": "Medical Mutual"
		}, {
			"key": "Social Security Number",
			"value": "123-45-6789"
		}, {
			"key": "Contact Information",
			"value": "867-5309"
		}]
	}
}, {
	"id": 4,
	"name": "Past Health Issues",
	"isShared": true,
	"formData": {
		"name": "General Health Form",
		"fields": [{
			"key": "Reason for visit",
			"value": "appointment/checkup"
		}, {
			"key": "Insurance provider",
			"value": "Medical Mutual"
		}, {
			"key": "Social Security Number",
			"value": "123-45-6789ghjss"
		}, {
			"key": "Contact Information",
			"value": "867-5309"
		}]
	}
}, {
	"id": 5,
	"name": "Insurance Information",
	"isShared": true,
	"formData": {
		"name": "General Health Form",
		"fields": [{
			"key": "Reason for visit",
			"value": "appointment/checkup"
		}, {
			"key": "Insurance provider",
			"value": "Medical Mutual"
		}, {
			"key": "Social Security Number",
			"value": "123-45-6789"
		}, {
			"key": "Contact Information",
			"value": "867-5309"
		}]
	}
}, {
	"id": 6,
	"name": "Dentist Information",
	"isShared": true,
	"formData": {
		"name": "General Health Form",
		"fields": [{
			"key": "Reason for visit",
			"value": "appointment/checkup"
		}, {
			"key": "Insurance provider",
			"value": "Medical Mutual"
		}, {
			"key": "Social Security Number",
			"value": "123-45-6789"
		}, {
			"key": "Contact Information",
			"value": "867-5309"
		}]
	}
}, {
	"id": 7,
	"name": "Checkup Paperwork",
	"isShared": true,
	"formData": {
		"name": "General Health Form",
		"fields": [{
			"key": "Reason for visit",
			"value": "appointment/checkup"
		}, {
			"key": "Insurance provider",
			"value": "Medical Mutual"
		}, {
			"key": "Social Security Number",
			"value": "123-45-6789"
		}, {
			"key": "Contact Information",
			"value": "867-5309"
		}]
	}
}];


    todoList.docs = medicalDocuments;
    for(var i = 0; i < BasicIdentModel.length; i++){
      BasicIdentModel[i].formData.name = BasicIdentModel[i].name;
      var renderedString = parseMedJSON(BasicIdentModel[i].formData);
      console.log(BasicIdentModel[i].name);
      medicalDocuments.push({index: i, name: BasicIdentModel[i].name, data: renderedString});
    }





    todoList.mainDoc = todoList.docs[0];


    todoList.selectDoc = function (index) {
      // todoList.docs[0].name = "jnsdvjnkdvjksdv";



      todoList.showMain = false;
      console.log("You cliked ")

      todoList.mainDoc = todoList.docs[index];

    };
    todoList.toggleMedData = function () {
      todoList.showMain = !todoList.showMain;
    }

    todoList.addPatient = function(patient){

    }


    // todoList.todos = [
    //   {text:'learn angular', done:true},
    //   {text:'build an angular app', done:false}];

    // todoList.addTodo = function() {
    //   todoList.todos.push({text:todoList.todoText, done:false});
    //   todoList.todoText = '';
    // };
  });

  var initReceiver = function () {
    var recvObj = {
        profilename: "audible",
        successes: 0,
        failures: 0,
        textContent: "",
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
                console.log(medicalData);
                for(var i = 0; i < medicalData.length; i++){
                  var renderedHtmlString = parseMedJSON(medicalData[i].formData)
                  medicalDocuments.push({index: medicalDocuments.length, name: medicalData[i].name, data:renderedHtmlString});
                }
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





