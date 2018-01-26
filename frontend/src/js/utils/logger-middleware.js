import { createLogger } from 'redux-logger';
import Immutable from 'immutable';

const logger = createLogger({
  stateTransformer: (state) => {
    const newState = {};

    for (let i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }

    return newState;
  }
});

export default logger;
