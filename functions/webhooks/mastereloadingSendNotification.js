const { messaging } = require("../lib/firebase")

const mastereloadingSendNotification = async (req, res) => {
  const token = ['eJ4ZUEmKRc25jmOKgRw3eA:APA91bG1X84GvJx8_IDZjSS28O1o5xYdfymA5a_j4p02iK9DtY1c9Qkg0rGkEhALLphEInE2OpDSStUb5Ch9c40yJiXo3dJrznLonujxQ3yHFOAzvBWi3aQl8RS9sIAb8Lqu4e9Tf01n']
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
