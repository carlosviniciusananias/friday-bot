const slackService = require("../services/slack");

class SlackController {
  hello(req, res) {
    slackService.postTextMessage({
      channel: "private-dev",
      text: "Sextouuuuuu caralho, onlineeEEeeEeee!",
    });

    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  }
}

module.exports = new SlackController();