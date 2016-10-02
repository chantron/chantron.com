import _ from 'underscore';
import Backbone from 'backbone';

var ContactInfo = Backbone.Model.extend({
    defaults: {
        firstName: null,
        lastName: null
    }
});

_.extend(ContactInfo, Backbone.Events);

ContactInfo.on('change:firstName', function() {
    console.log('changed first name!');
});

ContactInfo.on('change:lastName', function() {
    console.log('changed last name!');
});

export default ContactInfo;
