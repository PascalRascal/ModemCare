angular.module('modemHealth.Forms', [])

    .factory('Forms', function () {
        var forms = [{
            id: 0,
            name: 'General Health Form',
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
            "value": ""
        },
        {
            "key": "Street Address",
            "value": ""
        },
        {
            "key": "Apartment #",
            "value": ""
        },
        {
            "key": "City/Town",
            "value": ""
        },
        {
            "key": "State",
            "value": ""
        },
        {
            "key": "Zipcode",
            "value": ""
        },
        {
            "key": "Patient email address",
            "value": ""
        },
        {
            "key": "Home phone number",
            "value": ""
        },
        {
            "key": "Cell phone number",
            "value": ""
        }
    ]
}
        }, {
            id: 1,
            name: 'Past Health Issues',
            isShared: false,
            formData:
{
    "name": "Basic Identification Information",
    "fields": [
        {
            "key": "First Name",
            "value": "noel"
        },
        {
            "key": "Middle Name",
            "value": ""
        },
        {
            "key": "Last Name",
            "value": ""
        },
        {
            "key": "D.O.B. (MM/DD/YYYY)",
            "value": ""
        },
        {
            "key": "Street Address",
            "value": ""
        },
        {
            "key": "Apartment #",
            "value": ""
        },
        {
            "key": "City/Town",
            "value": ""
        },
        {
            "key": "State",
            "value": ""
        },
        {
            "key": "Zipcode",
            "value": ""
        },
        {
            "key": "Patient email address",
            "value": ""
        },
        {
            "key": "Home phone number",
            "value": ""
        },
        {
            "key": "Cell phone number",
            "value": ""
        }
    ]
}
        }, {
            id: 2,
            name: 'Insurance Information',
            isShared: false,
            formData: "tbd"

        }, {
            id: 3,
            name: 'Dentist Information',
            isShared: false,
            formData: "tbd"

        }, {
            id: 4,
            name: 'Checkup Paperwork',
            isShared: false,
            formData: "tbd"

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