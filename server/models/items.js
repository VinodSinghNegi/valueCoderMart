const mongoose = require("mongoose");

const items = mongoose.model('items', {
    name: {
        type: String,
        default: null
    }
})

module.exports = items