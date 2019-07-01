import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@xo-union/tk-component-buttons';

/*
 * To see a live example:
 * 1. setup the project running the instructions on the README
 * 2. open the index.html file
 * 3. mount the button component on the browser, using AMD:
 *
  require(['tk-union'], ({ React, ReactDOM, ...union}) => {
    ReactDOM.render(
      React.createElement(
        union.Button, {
          children: 'Click Me!',
          onClick: () => { console.log("Ive been clicked!"); }
        }
      ), document.getElementById('root')
    );
  });
*/

// These modules will be defined in the library.
export {
  React,
  ReactDOM,
  Button
};
