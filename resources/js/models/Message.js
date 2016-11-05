import _ from 'underscore';
import Backbone from 'backbone';
import validator from 'validator';

var Message = Backbone.Model.extend({
    url: '/messages',
    required: ['name', 'from', 'subject', 'text'],
    defaults: {
        name: null,
        from: null,
		subject: 'General',
		text: null
    },
    validate: function(attributes, options) {
        var errors = [];
        this.required.forEach(function(attribute) {
            if (!attributes[attribute]) {
                errors.push(attribute + ' is required');
            }
        });

        if (this.get('from')) {
            if (!validator.isEmail(this.get('from'))) {
                errors.push('You must submit a valid email');
            }
        }

        if (errors.length) {
            return errors;
        }

        this.sanitize();
    },
    sanitize: function() {
        for (var i = 0; i < this.attributes; i++) {
            this.set(this.attributes[i], validator.escape(attribute));
        }
    },
    validEmail: function() {
        var email = this.get('from');
        if (email && validator.isEmail(email)) {
            return true;
        }

        return false;
    }
});

_.extend(Message, Backbone.Events);

export default Message;
