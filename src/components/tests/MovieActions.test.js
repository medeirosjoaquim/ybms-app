import configureStore from 'redux-mock-store';
import * as actions from '../../actions'
import * as types from '../../actions/types'
const mockStore = configureStore();
const store = mockStore();


describe('selectAvatar', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  it('should dispatch REQUEST_MOVIES_LIST', () => {
    const expectedActions = [{type: types.REQUEST_MOVIES_LIST}]
    store.dispatch(actions.requestMoviesList());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch RECEIVE_MOVIES_LIST', () => {
    const payload = {movies: [1, 2, 3]};
    const expectedActions = [{type: types.RECEIVE_MOVIES_LIST, payload }]
    store.dispatch(actions.receiveMoviesList(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
