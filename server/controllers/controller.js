const University = require('./../db/db.js');

const convertIntoPercentile = (score, university) => {
  return University.find({'name': university}).exec()
    .then(universityName => {
      const twentyFifthPercentile = universityName[0].bottom;
      const seventyFifthPercentile = universityName[0].top;
      const median = (twentyFifthPercentile + seventyFifthPercentile) / 2;
      const zerothPercentile = twentyFifthPercentile - (median - twentyFifthPercentile);
      const hundredthPercentile = seventyFifthPercentile - (median - seventyFifthPercentile);
      let studentPercentile = (score - zerothPercentile)/(hundredthPercentile - zerothPercentile);
      if (studentPercentile < 0) {
        studentPercentile = 0;
      }
      if (studentPercentile > 1) {
        studentPercentile = 1;
      }
      return Math.floor(studentPercentile*100);
    })
    .catch(error => console.error(error));
};

const getScore = (request, response) => {
  convertIntoPercentile(request.session.score, request.session.university)
    .then(percentile => {
      const universityData = {
        score: request.session.score,
        university: request.session.university,
        percentile: percentile,
      };
      response.status(200).send(universityData);
    })
    .catch(err => console.error(err));
};

const postScore = (request, response) => {
  request.session.score = request.body.score;
  request.session.university = request.body.university;
  response.redirect('/#/score');
};

const getMain = (request, response) => response.redirect('/');

module.exports = {
  getScore: getScore,
  postScore: postScore,
  getMain: getMain
};
