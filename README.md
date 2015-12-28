# Webpack-template [![Circle CI](https://circleci.com/gh/JensDebergh/webpack-template.svg?style=svg)](https://circleci.com/gh/JensDebergh/webpack-template)

## Installation

First you'll need to make sure your system has node installed.

### Install script

To setup your project run `bin/setup`


## Features

* Compilation with webpack
* React and jsx
* Redux & redux-router
* SASS support (hot reload)
* ImmutableJS & Pure rendering
* Development
  * Development server
  * Hot Module Replacement

### React + Immutable

When using immutable data structures we can optimize react using the `PureRenderMixin`. This allows react to determine if the component receiving the props needs to be rerendered or not.

Dependencies:

* react-addons-pure-render-mixin

Usage:
```
import {PureRenderMixing} from 'react-addons-pure-render-mixin'

export default React.createClass({
  mixins: [PureRenderMixin],
  // ...
});
```

### Introduction

#### Action creators

Action creators are pure functions that create an action object of following format:

```
function addText(text){
  return { type: 'ADD_TEXT', text }
}

// Made possible by redux-thunk
function asyncAddText(text) {
  return dispatch => {
    return dispatch(addText(text));
  }
}

// Fetching data with redux-thunk & es6 promises
function fetchMyObjects() {
  return dispatch => {
    return fetch('http://myapi.com/objects').then(
      response => response.json(), // Resolve
      response => response.error // Reject
    ).then(
      myobjects => dispatch(addMyObjects(myobjects)), // If fetch response => response.json() resolves next thenable receives the json object as myobjetcs
      err => console.log(err) // If response.json() fails the promise gets rejected and executes this function
    )
  }
}

FORMAT:
{ type: '', // TYPE will filter the action inside the reducer additionalArguments }
```
### Components

Components are react components disconnected from the redux store. Receiving everything they need via props.

They are able to dispatch actions based on user interactions using.

```
this.props.dispatch(addText('Buy kitty'))
```

Dispatching an action will invoke `ALL` reducers manipulating the state of
the application. Based on the action type provided by the action creator.

### Constants

Contain all action types for the action-creators. Aswell as other constants
needed for the application.

```
# constants/action-types.js
export const ADD_TEXT = 'ADD_TEXT';

# action-creators/ACTIONCREATOR

import { ADD_TEXT } from '../constants/action-types';

function addText(text) {
  return { type: ADD_TEXT, text };
}
```

### Containers/Pages

Containers are smart components as they should be connected to the redux store
and pass on state towards the components via props.

Containers are used as pages throughout the router. `routes.js`.

### Reducers

Reducers are functions that change the state of the application via
received `action-creators` through the dispatch command.
A reducer should NEVER directly mutate the state of the app.
Instead a new object should be created and returned.
This is where immutableJS comes into play.
ImmutableJS makes sure that you
cannot MUTATE the state and do more harm then good.

Typical reducer:

```
import { ADD_TEXT } from '../constants/action-types';

function todoStateReducer(previousState, action){
  switch(action.type) {
    case ADD_TEXT:
      return previouseState.update(['todo', 'text'], action.text);
    break;
    default:
    return previousState;
  }
}
```

### Route handlers

Route handlers contain the `containers / pages` used by react-router to
display the page based on the url.
Route handlers inject the redux state inside the top level component.

Typicall route-handler

```
import MYCONTAINER from '../containers/MYCONTAINER';
import { connect } from 'react-redux'; // used to connect the redux store the to the page component

// Maps redux state to a new object specific for the component
function mapStateToProps(state) {
  return {
    todo: state.get('todo');
  }
}

export default connect(mapStateToProps)(MYCONTAINER); // Pass only what you need
export default connect( state => state )(MYCONTAINER); // Pass the entire state
```
