import $ from 'jquery';

export default function fullHeightDecorator(node) {
    var fullHeight = () => {
        $(node).height($(window).height());
    };

    fullHeight();
    window.addEventListener('resize', fullHeight);

    return {
        teardown: () => {
            window.removeEventListener('resize', fullHeight);
        }
    };
}
