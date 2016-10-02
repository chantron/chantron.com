import $ from 'jquery';

export default function responsiveMenuDecorator(node, content) {
    var nav = $('#main'),
        toggleNav,
        self = this,
        items = $('.navigation-list-item');

    toggleNav = function() {
        if (self.get('window').width() > 720) {
            self.set('responsiveMenu', false);
            return;
        }
    };

    toggleNav();
    window.addEventListener('resize', toggleNav);

    return {
        teardown: () => {
            window.removeEventListener('resize', toggleNav);
        }
    };
}
