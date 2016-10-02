import $ from 'jquery';

export default function highlightedDecorator(node, content) {
    var nav = $('#main'),
        checkHighlighted,
        checkPos,
        applyClasses;

    checkPos = function(event) {
        return node.getBoundingClientRect().top < -100;
    };

    checkHighlighted = () => {
        if (checkPos() || this.get('responsiveMenu')) {
            return true;
        }

        return false;
    };

    applyClasses = () => {
        if (checkHighlighted()) {
            nav.addClass('highlighted');
        } else {
            nav.removeClass('highlighted');
        }
    };

    window.addEventListener('scroll', applyClasses);

    return {
        teardown: () => {
            window.removeListener('scroll', checkPos);
        }
    };
}
