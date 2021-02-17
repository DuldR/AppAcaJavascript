const MessageStore = require('./message_store.js');

const Inbox = {


    render: function render() {
        console.log(this);
        let inboxMessages = MessageStore.getInboxMessages();
        let inputUL = document.createElement('ul');
        inputUL.className = 'messages';

        inboxMessages.forEach((message) => {
            console.log(this);
            let inputMessage = this.renderMessage(message);


            inputUL.appendChild(inputMessage);
        });
        // let inputUL = document.createElement('ul');
        // inputUL.className = 'messages';
        // inputUL.innerHTML = 'An Inbox Message';

        return inputUL;
    },

    renderMessage: function renderMessage(message) {

        let inputLi = document.createElement('li');
        inputLi.className = 'message';
        inputLi.innerHTML = `<span class='from'>${message.from}</span><span class='subject'>${message.subject}</span>
        <span class='body'>${message.subject}</span>`

        return inputLi;

    

    }
}

module.exports = Inbox;