angular.module('modemHealth.Forms', [])

    .factory('Forms', function () {
        var forms = [{
            id: 0,
            name: 'General Health Form',
            isShared: false,
            formData: "tbd"
        }, {
            id: 1,
            name: 'Past Health Issues',
            isShared: false,
            formData: "tbd"

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