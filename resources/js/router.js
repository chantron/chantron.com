import Backbone from 'backbone';
import home from './controllers/home';
import about from './controllers/about';
import skills from './controllers/skills';
import contact from './controllers/contact';

var Router = Backbone.Router.extend({
    routes: {
        '': home,
        'home': home,
        'skills': skills,
        'about': about,
        'contact': contact
    },
    initialize: function(options) {
        //
    }
});

export default Router;
