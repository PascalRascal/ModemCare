angular.module('modemHealth.Forms', [])

    .factory('Forms', function () {
        var forms = [{
            id: 0,
            name: 'Basic Identification Information',
            isShared: false,
            formData:
{
    "name": "Basic Identification Information",
    "fields": [
        {
            "key": "First Name",
            "value": "michael"
        },
        {
            "key": "Middle Name",
            "value": ""
        },
        {
            "key": "Last Name",
            "value": "abbott"
        },
        {
            "key": "Date of Birth (MM/DD/YYYY)",
            "value": "01/01/1987"
        },
        {
            "key": "Street Address",
            "value": "1234 Whatever St."
        },
        {
            "key": "Apartment #",
            "value": "116"
        },
        {
            "key": "City/Town",
            "value": "Columbus"
        },
        {
            "key": "State",
            "value": "OH"
        },
        {
            "key": "Zipcode",
            "value": "12345"
        },
        {
            "key": "Patient email address",
            "value": "person@place.com"
        },
        {
            "key": "Home phone number",
            "value": "867-5309"
        },
        {
            "key": "Cell phone number",
            "value": "867-5309"
        }
    ]
}
        }, {
            id: 1,
            name: 'Patient History',
            isShared: false,
            formData:
{
    "name" : "Patient History",
    "fields" : [
        {
            "key": "Anemia",
            "value": "none"
        },
        {
            "key": "Anorexia",
            "value": "none"
        },
        {
            "key": "Arthritis",
            "value": "none"
        },
        {
            "key": "Asthma",
            "value": "none"
        },
        {
            "key": "Cancer",
            "value": "none"
        },
        {
            "key": "Chicken pox",
            "value": "none"
        },
        {
            "key": "Depression",
            "value": "none"
        },
        {
            "key": "Diabetes",
            "value": "none"
        },
        {
            "key": "Eating problems",
            "value": "none"
        },
        {
            "key": "Epilepsy or seizures",
            "value": "none"
        },
        {
            "key": "Heart disease",
            "value": "none"
        },
        {
            "key": "High/low blood pressure",
            "value": "none"
        },
        {
            "key": "Melanoma",
            "value": "none"
        },
        {
            "key": "Menstrual problems",
            "value": "none"
        },
        {
            "key": "Migraines",
            "value": "none"
        },
        {
            "key": "Sexually transmitted disease",
            "value": "none"
        },
        {
            "key": "Thyroid problems",
            "value": "none"
        },
        {
            "key": "Other",
            "value": "none"
        }
    ]
}
        }, {
            id: 2,
            name: 'Child Past Medical History',
            isShared: false,
            formData:
{
    "name": "Child Past Medical History",
    "fields": [
        {
            "key": "Asthma/wheezing",
            "value": "none"
        },
        {
            "key": "Blood: anemia (iron deficiency, Sickle Cell, Thalessemia)",
            "value": "none"
        },
        {
            "key": "Blood transfusions",
            "value": "none"
        },
        {
            "key": "Chicken pox (Varicella)",
            "value": "none"
        },
        {
            "key": "Contusions",
            "value": "none"
        },
        {
            "key": "Convulsions",
            "value": "none"
        },
        {
            "key": "Fractures",
            "value": "none"
        },
        {
            "key": "German Measles (Rubella)",
            "value": "none"
        },
        {
            "key": "Hearing problems",
            "value": "none"
        },
        {
            "key": "Hospitalizations",
            "value": "none"
        },
        {
            "key": "Measles (Rubeola)",
            "value": "none"
        },
        {
            "key": "Meningitis",
            "value": "none"
        },
        {
            "key": "Mumps",
            "value": "none"
        },
        {
            "key": "Operations",
            "value": "none"
        },
        {
            "key": "Poison ingestion",
            "value": "none"
        },
        {
            "key": "Temper tantrums",
            "value": "none"
        },
        {
            "key": "Visual problems",
            "value": "none"
        },
        {
            "key": "Other serious medical illnesses",
            "value": "none"
        }
    ]
}
        }, {
            id: 3,
            name: 'General Health Form',
            isShared: false,
            formData:
{
    "name": "General Health Form",
    "fields": [
        {
            "key": "Reason for visit",
            "value": "appointment/checkup"
        },
        {
            "key": "Insurance provider",
            "value": "Medical Mutual"
        },
        {
            "key": "Social Security Number",
            "value": "123-45-6789"
        },
        {
            "key": "Contact Information",
            "value": "867-5309"
        }
    ]
}
        }, {
            id: 4,
            name: 'Past Health Issues',
            isShared: false,
            formData:
{
    "name": "General Health Form",
    "fields": [
        {
            "key": "Reason for visit",
            "value": "appointment/checkup"
        },
        {
            "key": "Insurance provider",
            "value": "Medical Mutual"
        },
        {
            "key": "Social Security Number",
            "value": "123-45-6789"
        },
        {
            "key": "Contact Information",
            "value": "867-5309"
        }
    ]
}
        }, {
            id: 5,
            name: 'Insurance Information',
            isShared: false,
            formData:
{
    "name": "General Health Form",
    "fields": [
        {
            "key": "Reason for visit",
            "value": "appointment/checkup"
        },
        {
            "key": "Insurance provider",
            "value": "Medical Mutual"
        },
        {
            "key": "Social Security Number",
            "value": "123-45-6789"
        },
        {
            "key": "Contact Information",
            "value": "867-5309"
        }
    ]
}
        }, {
            id: 6,
            name: 'Dentist Information',
            isShared: false,
            formData:
{
    "name": "General Health Form",
    "fields": [
        {
            "key": "Reason for visit",
            "value": "appointment/checkup"
        },
        {
            "key": "Insurance provider",
            "value": "Medical Mutual"
        },
        {
            "key": "Social Security Number",
            "value": "123-45-6789"
        },
        {
            "key": "Contact Information",
            "value": "867-5309"
        }
    ]
}
        }, {
            id: 7,
            name: 'Checkup Paperwork',
            isShared: false,
            formData:
{
    "name": "General Health Form",
    "fields": [
        {
            "key": "Reason for visit",
            "value": "appointment/checkup"
        },
        {
            "key": "Insurance provider",
            "value": "Medical Mutual"
        },
        {
            "key": "Social Security Number",
            "value": "123-45-6789"
        },
        {
            "key": "Contact Information",
            "value": "867-5309"
        }
    ]
}
        }];

        return {
            all: function () {
                return forms;
            },
            remove: function (form) {
                forms.splice(chats.indexOf(form), 1);
            },
            get: function (formId) {
                for (var i = 0; i < forms.length; i++) {
                    if (forms[i].id === parseInt(formId)) {
                        return forms[i];
                    }
                }
                return null;
            }
        };
    });




