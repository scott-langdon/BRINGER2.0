'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  host: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  guests: Array, 
  items: Array
});

var Event = mongoose.model('Event', EventSchema); 
module.exports = Event; 