const defaultIndex = require('./default-index');
const component = require('./component');
const componentStory = require('./component-story');
const componentTypes = require('./component.types');
const componentStories = require('./component.stories');
const componentTests = require('./component.test');
const componentStyles = require('./component.scss');

const indexD = require('./indexd');
const typings = require('./typings');

module.exports = [
  defaultIndex,
  indexD,
  typings,
  component,
  componentStory,
  componentTypes,
  componentStories,
  componentTests,
  componentStyles,
];
