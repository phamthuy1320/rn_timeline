import { createStore} from 'redux';
import reducers from '../../reducers/Home';

const store = createStore(reducers);

export default store;
