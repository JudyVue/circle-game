import {createStore } from 'redux';
import reducer from '../reducers/game-reducers';

export default () => createStore(reducer);

