import { fromJS } from 'immutable';
import * as actions from './actions';

const user = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case actions.UPDATE_USER:
      return state.set('name', action.user.name);
      
    default:
      return state;
  }
};

export default user;
