import Backbone from 'backbone';
import home from './controllers/home';
import about from './controllers/about';
import work from './controllers/work';
import blog from './controllers/blog';
import contact from './controllers/contact';

var Router = Backbone.Router.extend({
    routes: {
        '': home,
        'home': home,
        'about': about,
        'contact': contact
    },
    initialize: function(options) {
        //
    }
});

export default Router;
