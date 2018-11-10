import {CHANGEUSER, GETUSERERROR} from '../Actions/UserActions';

export default function userReducer(state = '', action)
{
    switch(action.type)
    {
        case CHANGEUSER:
            state = action.payload.user;
        break;
        case GETUSERERROR:
            state = action.payload.error;
        break;
    }
    return state;
}