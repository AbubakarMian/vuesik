import { SET_LANGUAGE } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    
    lang: 'en',
}
const languageReducer = (state = initialState, action) =>  {
   
    // return state;
     switch (action.type) {

        case SET_LANGUAGE:
            AsyncStorage.setItem('Lang',JSON.stringify(action.value));

            return {
                ...state,
                lang: action.value,
            }
            break;

        default:
            return state;
    }
}
export default languageReducer;
