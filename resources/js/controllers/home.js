export default function home() {
    this.view.set('backgroundImage', '/assets/images/m100.jpg');
    this.view.resetPartial('content', this.view.partials.home);
}
