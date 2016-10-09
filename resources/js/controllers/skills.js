import $ from 'jquery';
import animate from '../animate';

export default function skills() {

    if (this.view.get('previousPath') === '/') {
        $.scrollTo($('#skills'));
        return;
    }

    this.view.resetPartial('content', this.view.partials.home).then(() => {
        $.scrollTo($('#skills'));
    });
}
