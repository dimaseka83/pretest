interface dummyChat {
  chats: Array < any > ,
}
const mixins = {
  data(): dummyChat {
      return {
          chats: [
          {
              id: 1,
            name: 'John Doe',
            message: [{
              text: 'Hello, how are you?',
              time: '2022-11-4 11:00:00',
              isMe: false,
              isNew: false
            }, {
              text: 'I am fine, thank you',
              time: '2022-11-4 11:05:00',
              isMe: true,
              isNew: false
            }, {
              text: 'What about you?',
              time: '2022-11-4 11:06:00',
              isMe: false,
              isNew: true
            }, {
              text: 'I am fine too',
              time: '2022-11-4 11:11:00',
              isMe: true,
              isNew: true
            },
          ],
            image: 'https://i.pravatar.cc/300'
          }, {
            id: 2,
            name: 'Jane Doe',
            message: [{
              text: 'Hello, how are you?',
              time: '2022-11-4 11:00:00',
              isMe: false,
              isNew: false
            }, {
              text: 'I am fine, thank you',
              time: '2022-11-4 11:05:00',
              isMe: true,
              isNew: false
            }, {
              text: 'What about you?',
              time: '2022-11-4 11:06:00',
              isMe: false,
              isNew: true
            }, {
              text: 'I am fine too',
              time: '2022-11-4 11:11:00',
              isMe: true,
              isNew: true
            },
          ],
            image: 'https://i.pravatar.cc/300'
          },
          {
            id: 3,
          name: 'John Doe',
          message: [{
            text: 'Hello, how are you?',
            time: '2022-11-4 11:00:00',
            isMe: false,
            isNew: false
          }, {
            text: 'I am fine, thank you',
            time: '2022-11-4 11:05:00',
            isMe: true,
            isNew: false
          }, {
            text: 'What about you?',
            time: '2022-11-4 11:06:00',
            isMe: false,
            isNew: true
          }, {
            text: 'I am fine too',
            time: '2022-11-4 11:11:00',
            isMe: true,
            isNew: true
          },
        ],
          image: 'https://i.pravatar.cc/300'
        }, {
          id: 4,
          name: 'Jane Doe',
          message: [{
            text: 'Hello, how are you?',
            time: '2022-11-4 11:00:00',
            isMe: false,
            isNew: false
          }, {
            text: 'I am fine, thank you',
            time: '2022-11-4 11:05:00',
            isMe: true,
            isNew: false
          }, {
            text: 'What about you?',
            time: '2022-11-4 11:06:00',
            isMe: false,
            isNew: true
          }, {
            text: 'I am fine too',
            time: '2022-11-4 11:11:00',
            isMe: true,
            isNew: true
          },
        ],
          image: 'https://i.pravatar.cc/300'
        },
        {
          id: 5,
        name: 'John Doe',
        message: [{
          text: 'Hello, how are you?',
          time: '2022-11-4 11:00:00',
          isMe: false,
          isNew: false
        }, {
          text: 'I am fine, thank you',
          time: '2022-11-4 11:05:00',
          isMe: true,
          isNew: false
        }, {
          text: 'What about you?',
          time: '2022-11-4 11:06:00',
          isMe: false,
          isNew: true
        }, {
          text: 'I am fine too',
          time: '2022-11-4 11:11:00',
          isMe: true,
          isNew: true
        },
      ],
        image: 'https://i.pravatar.cc/300'
      }, {
        id: 6,
        name: 'Jane Doe',
        message: [{
          text: 'Hello, how are you?',
          time: '2022-11-4 11:00:00',
          isMe: false,
          isNew: false
        }, {
          text: 'I am fine, thank you',
          time: '2022-11-4 11:05:00',
          isMe: true,
          isNew: false
        }, {
          text: 'What about you?',
          time: '2022-11-4 11:06:00',
          isMe: false,
          isNew: true
        }, {
          text: 'I am fine too',
          time: '2022-11-4 11:11:00',
          isMe: true,
          isNew: true
        },
      ],
        image: 'https://i.pravatar.cc/300'
      },
      {
        id: 7,
      name: 'John Doe',
      message: [{
        text: 'Hello, how are you?',
        time: '2022-11-4 11:00:00',
        isMe: false,
        isNew: false
      }, {
        text: 'I am fine, thank you',
        time: '2022-11-4 11:05:00',
        isMe: true,
        isNew: false
      }, {
        text: 'What about you?',
        time: '2022-11-4 11:06:00',
        isMe: false,
        isNew: true
      }, {
        text: 'I am fine too',
        time: '2022-11-4 11:11:00',
        isMe: true,
        isNew: true
      },
    ],
      image: 'https://i.pravatar.cc/300'
    }, {
      id: 8,
      name: 'Jane Doe',
      message: [{
        text: 'Hello, how are you?',
        time: '2022-11-4 11:00:00',
        isMe: false,
        isNew: false
      }, {
        text: 'I am fine, thank you',
        time: '2022-11-4 11:05:00',
        isMe: true,
        isNew: false
      }, {
        text: 'What about you?',
        time: '2022-11-4 11:06:00',
        isMe: false,
        isNew: true
      }, {
        text: 'I am fine too',
        time: '2022-11-4 11:11:00',
        isMe: true,
        isNew: true
      },
    ],
      image: 'https://i.pravatar.cc/300'
    },
    {
      id: 9,
    name: 'John Doe',
    message: [{
      text: 'Hello, how are you?',
      time: '2022-11-4 11:00:00',
      isMe: false,
      isNew: false
    }, {
      text: 'I am fine, thank you',
      time: '2022-11-4 11:05:00',
      isMe: true,
      isNew: false
    }, {
      text: 'What about you?',
      time: '2022-11-4 11:06:00',
      isMe: false,
      isNew: true
    }, {
      text: 'I am fine too',
      time: '2022-11-4 11:11:00',
      isMe: true,
      isNew: true
    },
  ],
    image: 'https://i.pravatar.cc/300'
  }, {
    id: 10,
    name: 'Jane Doe',
    message: [{
      text: 'Hello, how are you?',
      time: '2022-11-4 11:00:00',
      isMe: false,
      isNew: false
    }, {
      text: 'I am fine, thank you',
      time: '2022-11-4 11:05:00',
      isMe: true,
      isNew: false
    }, {
      text: 'What about you?',
      time: '2022-11-4 11:06:00',
      isMe: false,
      isNew: true
    }, {
      text: 'I am fine too',
      time: '2022-11-4 11:11:00',
      isMe: true,
      isNew: true
    },
  ],
    image: 'https://i.pravatar.cc/300'
  },
        ]
        }
  },
  methods: {
    timeHuman(time: string) {
      const date = new Date()
      const dateNow = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      const dateNowSplit = dateNow.split(' ')
      const dateNowSplitDate = dateNowSplit[0].split('-')
      const dateNowSplitTime = dateNowSplit[1].split(':')
      const dateNowSplitDateYear = dateNowSplitDate[0]
      const dateNowSplitDateMonth = dateNowSplitDate[1]
      const dateNowSplitDateDay = dateNowSplitDate[2]
      const dateNowSplitTimeHour = dateNowSplitTime[0]
      const dateNowSplitTimeMinute = dateNowSplitTime[1]
      const dateNowSplitTimeSecond = dateNowSplitTime[2]
      const timeSplit = time.split(' ')
      const timeSplitDate = timeSplit[0].split('-')
      const timeSplitTime = timeSplit[1].split(':')
      const timeSplitDateYear = timeSplitDate[0]
      const timeSplitDateMonth = timeSplitDate[1]
      const timeSplitDateDay = timeSplitDate[2]
      const timeSplitTimeHour = timeSplitTime[0]
      const timeSplitTimeMinute = timeSplitTime[1]
      const timeSplitTimeSecond = timeSplitTime[2]
      // return `${dateNowSplitTimeMinute - timeSplitTimeMinute}`;
      if (dateNowSplitDateYear == timeSplitDateYear && dateNowSplitDateMonth == timeSplitDateMonth && dateNowSplitDateDay == timeSplitDateDay) {
        if (dateNowSplitTimeHour == timeSplitTimeHour && dateNowSplitTimeMinute == timeSplitTimeMinute && dateNowSplitTimeSecond == timeSplitTimeSecond) {
          return 'Just Now'
        } else if (dateNowSplitTimeHour == timeSplitTimeHour && dateNowSplitTimeMinute == timeSplitTimeMinute && dateNowSplitTimeSecond > timeSplitTimeSecond) {
          return `${dateNowSplitTimeSecond - timeSplitTimeSecond} seconds ago`
        } else if (dateNowSplitTimeHour == timeSplitTimeHour && dateNowSplitTimeMinute > timeSplitTimeMinute) {
          return `${dateNowSplitTimeMinute - timeSplitTimeMinute} minutes ago`
        } else if (dateNowSplitTimeHour > timeSplitTimeHour) {
          return `${dateNowSplitTimeHour - timeSplitTimeHour} hours ago`
        }
      } else if (dateNowSplitDateYear == timeSplitDateYear && dateNowSplitDateMonth == timeSplitDateMonth && dateNowSplitDateDay > timeSplitDateDay) {
        return `${dateNowSplitDateDay - timeSplitDateDay} days ago`
      } else if (dateNowSplitDateYear == timeSplitDateYear && dateNowSplitDateMonth > timeSplitDateMonth) {
        return `${dateNowSplitDateMonth - timeSplitDateMonth} months ago`
      } else if (dateNowSplitDateYear > timeSplitDateYear) {
        return `${dateNowSplitDateYear - timeSplitDateYear} years ago`
      }
    },
    getTimeOnly(time: string) {
      const timeSplit = time.split(' ')
      const timeSplitTime = timeSplit[1].split(':')
      const timeSplitTimeHour = timeSplitTime[0]
      const timeSplitTimeMinute = timeSplitTime[1]
      return `${timeSplitTimeHour}:${timeSplitTimeMinute}`
    },
  },
}

export default mixins