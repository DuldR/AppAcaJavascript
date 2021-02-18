const MessageStore = require('./message_store.js');


const Sent = {

    render: function render() {
                
        let sentMessages = MessageStore.getSentMessages();
        let inputUL = document.createElement('ul');
        inputUL.className = 'messages';

        sentMessages.forEach((message) => {

            let inputMessage = this.renderMessage(message);


            inputUL.appendChild(inputMessage);
        });

        return inputUL;

    },

    renderMessage: function renderMessage(message) {
        let inputLi = document.createElement('li');
        inputLi.className = 'message';
        inputLi.innerHTML = `<span class='to'>${message.to}</span><span class='subject'>${message.subject}</span>
        <span class='body'>${message.subject}</span>`

        return inputLi;
    }



}

module.exports = Sent;