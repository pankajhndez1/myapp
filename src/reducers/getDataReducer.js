import { DELETEDATA, GETDATA, UPDATEDATA } from "../constant";

const initialState = [];
// DELETEDATA
const getDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETDATA:
            return [...action.payload];
        case UPDATEDATA:
            let newObj = action.payload;
            let index = state.findIndex(obj => obj.id === newObj.id);
            if (index !== -1) {
                state[index] = newObj;
            }
            console.log(state);
            return [...state];

        case DELETEDATA:
            let deletedNewObj = action.payload;
            console.log(deletedNewObj,'<---deletedNewObj');
        
        default:
            return state
    }
}

export default getDataReducer