const MessageStore = require('./message_store.js');

const Compose = {

    render: function render() {

        let divContainer = document.querySelector('div.content');
        divContainer.addEventListener('change', function(event) {
            // alert(event.currentTarget);
            console.log(event.target.name);
            console.log(event.target.value);

            MessageStore.updateDraftField(event.target.name, event.target.value);
            console.log(MessageStore.getMessageDraft());
        })

        
        // Adds email html
        let inputDiv = document.createElement('div');
        inputDiv.className = 'new-message';
        inputDiv.innerHTML = this.renderForm();

        return inputDiv;

    },

    renderForm: function renderForm() {

        let currentDraft = MessageStore.getMessageDraft();
        let inputHTML = `<p class='new-message-header'>New Message</p>


        <form class='compose-form'>
            <input placeholder='Recipient' name='to' type='text' value=${currentDraft.to}>
            <input placeholder='Subject' name='subject' type='text' value=${currentDraft.subject}>
            <textarea name='body' rows='20'>${currentDraft.body}</textarea>

            <button type='submit' class='btn btn-primary submit-message'>Send</button>
        </form>`

        return inputHTML

    }

}

module.exports = Compose;