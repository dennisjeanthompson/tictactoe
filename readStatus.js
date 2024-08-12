class Message {
    constructor(id, content) {
        this.id = id;
        this.content = content;
        this.read = false;
    }

    markAsRead() {
        this.read = true;
        // Update the UI
        const listItem = document.querySelector(`li[data-id="${this.id}"]`);
        if (listItem) {
            listItem.classList.remove('unread');
            listItem.classList.add('read');
        }
    }
}

const messages = [
    new Message(1, "Message 1"),
    new Message(2, "Message 2"),
    new Message(3, "Message 3")
];

// Add click event listener to each message
document.querySelectorAll('#message-list li').forEach(item => {
    item.addEventListener('click', () => {
        const id = parseInt(item.getAttribute('data-id'), 10);
        const message = messages.find(msg => msg.id === id);
        if (message) {
            message.markAsRead();
        }
    });
});
