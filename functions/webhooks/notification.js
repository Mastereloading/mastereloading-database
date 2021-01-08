const { messaging } = require("../lib/firebase")

const sendNotification = async (req, res) => {
  const token = ['cxi8yqn4TwCs1RSDPQYLKj:APA91bHdo_IhyaQCkYuAMRbpYXsDnUrlETLoBD7JD4XofRJhyuSb9eaUpqo7j8NuTMS25taagms6i4M9jpiAj54_CDecLocRkOv6EGgshsV_jit-85PSHYgq9YTXN8L1xdlZjkmC4rMx']
  const payload = {
    notification: {
      title: 'Segurança Vela',
      body: 'Sua vela está em movimento, Cuidado!',
      image: 'https://firebasestorage.googleapis.com/v0/b/mastereloading-database.appspot.com/o/pngs%2Ferror.png?alt=media&token=e8c0dc1e-9686-49a0-9166-9a57784aec66'
    }
  }

  await messaging.sendToDevice(token, payload)

  return res.send('OK')
}

module.exports = sendNotification
