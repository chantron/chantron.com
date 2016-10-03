import $ from 'jquery';

export default function fullHeightDecorator(node) {
    var $node = $(node),
        $window = $(window),
        fullHeight;

    fullHeight = () => {
        if ($node.height() >= $window.height()) {
            return;
        }

        $node.height($window.height());
    };

    fullHeight();
    window.addEventListener('resize', fullHeight);

    return {
        teardown: () => {
            window.removeEventListener('resize', fullHeight);
        }
    };
}
