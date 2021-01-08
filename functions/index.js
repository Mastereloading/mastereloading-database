const functions = require('firebase-functions')

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true})
  response.send("Hello from Firebase!")
})

const mastereloadingSendNotification = require('./webhooks/mastereloadingSendNotification')
exports.mastereloadingSendNotification = functions.https.onRequest(mastereloadingSendNotification)

const webhookSendNotification = require('./webhooks/notification')
exports.webhookSendNotification = functions.https.onRequest(webhookSendNotification)
