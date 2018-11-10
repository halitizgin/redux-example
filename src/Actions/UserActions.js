import axios from 'axios';

export const CHANGEUSER = "CHANGEUSER";
export const GETUSERERROR = "GETUSERERROR";

export function changeUser(User)
{
    return {
        type: CHANGEUSER,
        payload: {
            user: User
        }
    }
}

export function getUserError()
{
    return {
        type: GETUSERERROR,
        payload: {
            error: 'ERROR!'
        }
    }
}

export function getUsers()
{
    return async dispatch => {
        try
        {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
            dispatch(changeUser(res.data.name));
        }
        catch(e)
        {
            dispatch(getUserError());
        }
    }
}