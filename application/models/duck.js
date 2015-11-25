var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DuckSchema = new Schema({
    text: String
});

module.exports = mongoose.model('Duck', DuckSchema);