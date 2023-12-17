import defaultIndex from './default-index';
import component from './component';
import componentComplex from './component-complex';
import componentStory from './component-story';
import componentTypes from './component.types';
import componentStories from './component.stories';
import componentTests from './component.test';
import componentStyles from './component.css';
import indexD from './indexd';
import typings from './typings';

/*
const defaultIndex = require('./default-index');
const component = require('./component');
const componentComplex = require('./component-complex');
const componentStory = require('./component-story');
const componentTypes = require('./component.types');
const componentStories = require('./component.stories');
const componentTests = require('./component.test');
const componentStyles = require('./component.css');



const indexD = require('./indexd');
const typings = require('./typings');
*/
const all = [
  defaultIndex,
  indexD,
  typings,
  component,
  componentComplex,
  componentStory,
  componentTypes,
  componentStories,
  componentTests,
  componentStyles,
];

default export all;