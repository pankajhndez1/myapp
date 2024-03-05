import { DELETEDATA, GETDATA ,UPDATEDATA} from "../constant"

export function myAsyncFunc() {
    return async function (dispatch, getState) {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" });
        const data = await res.json();
        return dispatch(getData(data))
    }
}

export const getData = (data) => {
    return (
        {
            type: GETDATA,
            payload: data
        }
    )
}


export const updateData = (data) => {
    return (
        {
            type: UPDATEDATA,
            payload: data
        }
    )
}


export const deleteData = (data,id) => {
    console.log(data,'<==after deleting data');
    return (
        {
            type: DELETEDATA,
            payload: {data,id}
        }
    )
}




export const updateDataApi = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: 'foo'+`${id}`,
                body: 'bar'+`${id}`,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const data =await res.json();
        dispatch(updateData(data))
    }
}



export const deleteDataApi = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
        const data =await res.json();
        console.log(data,'<====after delete');
        dispatch(deleteData(data,id))
    }
}