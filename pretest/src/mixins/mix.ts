interface dummyChat {
    chats: Array < any > ,
  }
const mixins = {
    data(): dummyChat {
        return {
            chats: [{
                id: 1,
              name: 'John Doe',
              message: [{
                text: 'Hello, how are you?',
                time: '2022-11-03 11:00:00',
                isMe: false,
                isNew: false
              }, {
                text: 'I am fine, thank you',
                time: '2022-11-03 11:05:00',
                isMe: true,
                isNew: false
              }, {
                text: 'What about you?',
                time: '2022-11-03 11:06:00',
                isMe: false,
                isNew: true
              }, {
                text: 'I am fine too',
                time: '11:11:00',
                isMe: true,
                isNew: true
              }],
              image: 'https://randomuser.me/api/portraits/men/75.jpg'
            }, ]
          }
    },
}

export default mixins