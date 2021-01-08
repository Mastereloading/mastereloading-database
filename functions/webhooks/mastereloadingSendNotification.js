const { messaging } = require("../lib/firebase")

const masterelaodingSendNotification = async (req, res) => {
  const token = ['ffQU1mQATGiI37q2WqDahQ:APA91bGbEdiA2wsLLs3DEss8HiNLj2XsAlgZz_K_lfwfgby8akVKgGTsocd26pQiu7rpbC5rdUJtqjWWO3lou90G2IkwEfXFT0NUfjlDpvWKMlI5zNGuqNgKTuU5ZLxFlTf5i_OgV6Tj']
  const payload = {
    notification: {
      title: 'Notificação Masterelaoding',
      body: 'Está foi uma notificação enviada pelo aplicativo, clique em mim :)'
    }
  }

  await messaging.sendToDevice(token, payload)

  return res.send('OK')
}

module.exports = mastereloadingSendNotification
