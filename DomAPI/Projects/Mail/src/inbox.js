const Inbox = {


    render: () => {
        let inputUL = document.createElement('ul');
        inputUL.className = 'messages';
        inputUL.innerHTML = 'An Inbox Message';

        return inputUL;
    }
}

module.exports = Inbox;