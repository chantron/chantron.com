

export default function sendMessage(event) {
    event.original.preventDefault();
    var message = this.get('message');
    message.save();
}
