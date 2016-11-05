import $ from 'jquery';
import fade from 'ractive-transitions-fade';
import Ractive from 'ractive';
import backboneAdaptor from 'ractive-adaptors-backbone';
import scrollToDecorator from './decorators/scroll-to-decorator';
import isVisibleDecorator from './decorators/is-visible-decorator';
import fullHeightDecorator from './decorators/full-height-decorator';
import highlightedDecorator from './decorators/highlighted-decorator';
import responsiveMenuDecorator from './decorators/responsive-menu-decorator';
import sendMessage from './actions/send-message';

Ractive.DEBUG = false;

var ChantronRactive = Ractive.extend({
    data: () => {
        return {
            getBackgroundImage: () => {
                if (this.get('hershMode')) {
                    return '/assets/images/hersh-1.jpg';
                }
                return this.get('backgroundImage');
            },
            message: null,
            errors: null,
			success: null,
            previousPath: null,
            backgroundImage: '/assets/images/m100.jpg',
            window: $(window),
            isActive: (path) => {
                return this.get('path') === path;
            },
            isVisible: () => {
                return this.get('window').width() > 720;
            },
            responsiveMenu: false,
            hershMode: false,
			validEmail: false,
        };
    },
    init: function() {
        var self = this,
            message = this.get('message');

        this.on('sendMessage', sendMessage);

        message.on('invalid', function(message) {
            var err = 'Could not send message. ' + message.validationError.join(', ') + '.';
            self.set('success', null).then(function() {
				self.set('errors', err);
			});
        });

		message.on('request', function(message) {
			self.set('loading', true);
		});

        message.on('sync', function(message, response) {
			self.set('loading', false);
			self.set('errors', null).then(function() {
				self.set('success', response.message);
			});
        });

        message.on('error', function(message, response) {
			self.set('loading', false);
			self.set('success', null).then(function() {
				self.set('errors', response.responseJSON.message);
			});
        });

		// message.on('change:from', function(message) {
		// 	console.log('changing');
		// 	if (message.validEmail()) {
		// 		self.set('validEmail', true);
		// 		return;
		// 	}
		// 	self.set('validEmail', false);
		// });
    },
    partials: {
        'content': document.getElementById('home-template').innerHTML,
        'home': document.getElementById('home-template').innerHTML,
        'about': document.getElementById('about-template').innerHTML,
        'contact': document.getElementById('contact-template').innerHTML
    },
    adapt: [backboneAdaptor],
    transitions: {
        fade: fade
    },
    computed: {

    },
    decorators: {
        highlighted: highlightedDecorator,
        responsiveMenu: responsiveMenuDecorator,
        fullHeight: fullHeightDecorator,
        isVisible: isVisibleDecorator,
        scrollTo: scrollToDecorator
    },
});

export default ChantronRactive;
