const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;