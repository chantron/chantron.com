import Backbone from 'backbone';
import $ from 'jquery';
import Navigation from './models/Navigation';
import Message from './models/Message';
import Router from './router';
import ChantronRactive from './chantron-ractive';
import backboneAdaptor from 'ractive-adaptors-backbone';

backboneAdaptor.Backbone = Backbone;
var Chantron = Backbone.View.extend({
    router: new Router(),
    template: $('#chantron-template').html(),
    el: '#chantron',
    initialize: function(models) {
        this.navigation = models.navigation;
        this.message = models.message;
        this.render();
        this.router.view = this.ractive;
        this.$el.appendTo(document.body);
        Backbone.history.start({pushState: true, root: '/'});
    },
    events: {
        'click .navigation-list-item-link': 'navigate',
        'click .navigation-list-item-title': 'navigate'
    },
    render: function() {
        this.ractive = new ChantronRactive({
            el: this.el, // pass the view's element to ractive
            template: this.template, // pass the view's template to ractive
            data: {
                navigation: this.navigation,
                message: this.message,
                path: window.location.pathname
            },
            router: this.router
        });
    },
    navigate: function(event) {
        event.preventDefault();
        var path = event.currentTarget.getAttribute('href') || '/';
        this.ractive.set('previousPath', this.ractive.get('path'));
        this.ractive.set('path', path);
        if (this.ractive.get('responsiveMenu')) {
            this.ractive.set('responsiveMenu', false);
        }

        this.router.navigate(path, {trigger: true});
    },
    remove: function() {
        this.ractive.teardown();
        Backbone.View.prototype.remove.call(this);
    }
});

var chantron = new Chantron({
    navigation: new Navigation({
        links: [
            {
                text: 'skills',
                href: '/skills'
            },
            {
                text: 'Contact',
                href: '/contact',
            },
            {
                text: 'About',
                href: '/about',
            },
        ]
    }),
    message: new Message(),
});

window.chantron = chantron;
