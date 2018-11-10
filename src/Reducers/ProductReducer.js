import {ADDPRODUCT} from '../Actions/ProductActions';

export default function productsReducer(state = [], action)
{
    if (action.type === ADDPRODUCT)
        state.push(...action.payload.product);
    return state;
}