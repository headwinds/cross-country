import { JSDOM } from 'jsdom';

const dom = new JSDOM();
dom.window.document.getElementById = jest.fn(() => {
  let dom = {};
  dom['body'] = { language: 'en' };
  dom['dataset'] = {
    allsearchresults: '0',
    bagcount: '5',
    loginurl: 'https://accounts.pcid.ca/oauth2/v1/authorize',
    userstatus: 'hardLoggedIn',
  };

  return dom;
});

Object.defineProperty(global, 'document', {
  writable: true,
  value: dom.window.document,
});

// global.document = dom.window.document;
// global.window = dom.window;

global.HTMLDivElement = dom.window.HTMLDivElement;
global.HTMLElement = dom.window.HTMLElement;
global.Element = dom.window.Element;
