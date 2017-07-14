const assert = require('chai').assert;

// start server
require('..');
const { PORT } = require('../shared');


describe('Video Player', () => {
  const browser = new Browser();
  browser.silent = true;

  before((done) => {
    browser.visit(`http://localhost:${PORT}/`, done);
  });

  describe('Presentation', function() {
    it('loads successfully', function() {
      // browser.assert.success('Unsuccessful load');
      // assert.equal(browser.tabs.length, 1, 'No tab showing');
    });

    it('has a timeline that is the same width as the video', function() {
      // const htmlDoc = browser.window.document;
      // const video = htmlDoc.querySelector('video');
      // const timeline = htmlDoc.querySelector('.timeline');
      
      // const videoWidth = video.clientWidth;
      // const timelineWidth = timeline.clientWidth;

      // assert.equal(videoWidth, timelineWidth, 'Video and timeline not same width');
    });
  });
});