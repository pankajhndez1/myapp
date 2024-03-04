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
            let deletedNewObj = action.payload.data;
            console.log(action.payload.id,'<---deletedNewObj');
            const newData=state.filter((ele)=>ele.id!==action.payload.id)
            return [...newData]
        
        default:
            return state
    }
}

export default getDataReducer