import {combineReducers} from 'redux';
import {menuReducer} from './Menu/reducers'

export default combineReducers({
    menuList: menuReducer
})