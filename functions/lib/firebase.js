const admin = require("firebase-admin")

admin.initializeApp()

const messaging = admin.messaging()

exports.messaging = messaging
