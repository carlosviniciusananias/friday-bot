const { WebClient } = require("@slack/web-api");

const BOT_USER_TOKEN = "token";
const web = new WebClient(BOT_USER_TOKEN);

class SlackService {
  postTextMessage(messageArguments) {clea
    web.chat.postMessage(messageArguments);
  }
}

module.exports = new SlackService();