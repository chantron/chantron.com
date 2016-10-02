import $ from 'jquery';

export default function isVisibleDecorator(node) {
    var isVisible,
        toggleClasses;

    node = $(node);

    isVisible = () => {
        if (this.get('responsiveMenu')) {
            return true;
        }

        if (this.get('window').width() > 720) {
            return true;
        }

        return false;
    };

    toggleClasses = () => {
        if (isVisible()) {
            return node.removeClass('hidden');
        }

        node.addClass('hidden');
    };

    this.observe('responsiveMenu', toggleClasses);
    window.addEventListener('resize', toggleClasses);

    return {
        teardown: () => {
            window.removeEventListener('resize', toggleClasses);
        }
    };
}
