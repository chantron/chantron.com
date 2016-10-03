import $ from 'jquery';

export default function responsiveMenuDecorator(node, content) {
    var nav = $('#main'),
        toggleNav;

    toggleNav = () => {
        if (this.get('window').width() > 720) {
            this.set('responsiveMenu', false);
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
