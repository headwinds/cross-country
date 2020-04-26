
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/components/templates/documented.js';
reactComponents['Documented'] = Component0;

import Component1 from '../src/components/atoms/grid/grid.js';
reactComponents['Grid'] = Component1;

import Component2 from '../src/components/atoms/text/input/text-input.js';
reactComponents['TextInput'] = Component2;