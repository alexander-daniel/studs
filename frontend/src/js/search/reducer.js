import { fromJS } from 'immutable';
import * as actions from './actions';

const search = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default search;
