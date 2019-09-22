import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../Home';
import { shallow } from 'enzyme';


jest.mock('react-redux', () => ({
useDispatch: ()=> { },
useSelector: () => ({movies: {results: [{poster: ''}]}})
}));


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(shallow(<Home />, div));
  ReactDOM.unmountComponentAtNode(div);
});
