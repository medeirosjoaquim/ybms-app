import MovieReducer from '../../reducers/movies'
import * as types from '../../actions/types'

describe('moviesreducer', () => {
  it ('Should return the initial state', () => {
    const action = { type: 'dummy_action' };
    const initialState = { };
    expect(MovieReducer(undefined, action)).toEqual(initialState);
  });

  it ('shall handle the action', () => {
  const action = { type: types.RECEIVE_MOVIES_LIST, payload: {data:1} };
    const expectedState = 1;
    expect(MovieReducer(undefined, action)).toEqual(expectedState);
  });

});
