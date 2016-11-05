import $ from 'jquery';

export default function contact() {
    this.view.set('backgroundImage', '/assets/images/ngc-1569.jpg');
    this.view.resetPartial('content', this.view.partials.contact);
    $.scrollTo($('#content'));
}
