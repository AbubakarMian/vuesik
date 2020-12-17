import { SET_USER, LOGOUT_USER } from '../constants/index';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    id: 0,
    name: 'Guest',
    email: 'guest@mail.com',
    access_token: 'U1U5VElFTnNhV1Z1ZEVsRU9pQnJhR0YwYldWdVlXSnZkMkYwTFdGd2NDMXBiM009'
}
const userReducer = (state = initialState, action) =>  {
   
     switch (action.type) {
         

        case SET_USER:
            AsyncStorage.setItem('User',JSON.stringify(state));
            console.log('action ',state);

            return {
                id: 13,
        name: 'Testst',
        email: 'tttttest@mail.com',
        access_token: 'U1U5VElFTnNhV1Z1ZEVsRU9pQnJhR0YwYldWdVlXSnZkMkYwTFdGd2NDMXBiM009'
            }
            break;
        case LOGOUT_USER:

            return {
                ...state,
                id: 0,
                name: 'Guest',
                email: 'guest@mail.com',
                access_token: 'guestAccessToken'
            }
            break;

        default:
            return state;
    }
}
export default userReducer;
