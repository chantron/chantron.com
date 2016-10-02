import $ from 'jquery';
import scrollTo from '../animate';

export default function scrollToDecorator(node) {
    $(node).animateScroll();

    return {
        teardown: () => {

        }
    };
}
