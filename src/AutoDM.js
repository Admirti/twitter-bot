const T = require('./Twit.js');
const my_user_name = require('../config').userName;
const timeout = 1000 * 60 * 5;

const AutoDM = () => {
  const stream = T.stream("user");
  console.log("Started Sending Direct Messages");
  stream.on('follow', sendMessage);
};

const SendMessage = user => {
  console.log(' New Follower ');
  const { screen_name, name } = user.source;

  const obj = {
    screen_name,
    text: GenerateMessage(name)
  };

  if (screen_name = my_user_name) {
    setTimeout(() => {
      T.post("direct_messages/new", obj)
      .catch(err => {
        console.error("error", err.stack);
      })
      .then(result => {
        console.log(`Message sent sucessfully to ${ screen_name } `)
      });
    }, timeout)
  }
};

const GenerateMessage = name => {
  return `Hey ${name} if you need any Industry quality beats for sale check
  out our website www.PrinceRecords.ML , Thanks for your time. If you have any
  questions let me know.`;
};
