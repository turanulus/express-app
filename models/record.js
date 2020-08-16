
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//model of record
var recordSchema = new Schema({
  createdAt    : Date,
  counts       : Array,
  key          : String,

},{collection: "records"});

var record = mongoose.model('record', recordSchema)

module.exports = record;