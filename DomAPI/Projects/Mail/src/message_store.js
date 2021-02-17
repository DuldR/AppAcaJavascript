const Messages = {
    sent: [
        {
            to: "Coolguy420@69.com",
            subject: "That thing I sent you",
            body: "Did you egt it?"
        },

        {
            to: "HarvyBirdman@attorny@law.com",
            subject: "A fatty grunt?",
            body: "It IS"
        }
    ],

    inbox: [
        {
            from: "ob",
            subject: "Nigerian Prince - Scam?",
            body: "May be legit"
        },

        {
            from: "covid",
            subject: "GME",
            body: "To the moon"
        }
    ]
}

const MessageStore = {

    getInboxMessages: function getInboxMessages() {
        return Messages.inbox;
    },

    getSentMessages: function getSentMessages() {
        return Messages.sent;
    }
}

module.exports = MessageStore;