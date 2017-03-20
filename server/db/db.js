const mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/satcompareshort';
mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongodb connection open.'));

const universitySchema = mongoose.Schema({
  name: String,
  bottom: Number,
  top: Number
}, {
  collection: 'University'
});

const University = mongoose.model('University', universitySchema);

module.exports = University;
