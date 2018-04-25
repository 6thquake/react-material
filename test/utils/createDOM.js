// @flow

const { JSDOM } = require('jsdom');
const Node = require('jsdom/lib/jsdom/living/node-document-position');

// We can use jsdom-global at some point if maintaining that list turns out to be a burden.
const KEYS = ['HTMLElement'];

function createDOM() {
  const dom = new JSDOM('');
  global.window = dom.window;
  global.document = undefined;
  global.Node = Node;

  Object.keys(dom.window).forEach(property => {
    if (typeof global[property] === 'undefined') {
      global[property] = dom.window[property];
    }
  });

  global.document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });

  global.navigator = {
    userAgent: 'node.js',
    appVersion: global.navigator.appVersion,
  };

  KEYS.forEach(key => {
    global[key] = window[key];
  });

  global.requestAnimationFrame = setTimeout;
  global.window.cancelAnimationFrame = () => {};
}

module.exports = createDOM;
