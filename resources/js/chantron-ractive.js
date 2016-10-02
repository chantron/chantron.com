import $ from 'jquery';
import fade from 'ractive-transitions-fade';
import Ractive from 'ractive';
import backboneAdaptor from 'ractive-adaptors-backbone';
import scrollToDecorator from './decorators/scroll-to-decorator';
import isVisibleDecorator from './decorators/is-visible-decorator';
import fullHeightDecorator from './decorators/full-height-decorator';
import highlightedDecorator from './decorators/highlighted-decorator';
import responsiveMenuDecorator from './decorators/responsive-menu-decorator';

Ractive.DEBUG = false;

var ChantronRactive = Ractive.extend({
    data: () => {
        return {
            backgroundImage: '/assets/images/m100.jpg',
            window: $(window),
            isActive: (path) => {
                return this.get('path') === path;
            },
            isVisible: () => {
                return this.get('window').width() > 720;
            },
            responsiveMenu: false,
        };
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
    decorators: {
        highlighted: highlightedDecorator,
        responsiveMenu: responsiveMenuDecorator,
        fullHeight: fullHeightDecorator,
        isVisible: isVisibleDecorator,
        scrollTo: scrollToDecorator
    },
});

export default ChantronRactive;
