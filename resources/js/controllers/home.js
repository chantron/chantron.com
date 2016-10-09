import $ from 'jquery';
import animate from '../animate';

export default function home() {
    this.view.set('backgroundImage', '/assets/images/m100.jpg');
    if (this.view.get('previousPath') === '/skills' || this.view.get('path') === '/') {
        $.scrollTo($('#chantron'));
        return;
    }

    this.view.resetPartial('content', this.view.partials.home);
}
