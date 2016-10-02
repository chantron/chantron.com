export default function about() {
    this.view.set('backgroundImage', '/assets/images/fiery-wise-pleiades.jpg');
    this.view.resetPartial('content', this.view.partials.about);
}
