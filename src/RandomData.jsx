import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteDataApi, myAsyncFunc, updateDataApi } from './actions';
import MyFom from './formik-forms/MyFom';

function RandomData() {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.getDataReducer);

  useEffect(() => {
    dispatch(myAsyncFunc())
  }, [])

  return (
    <div className="App">
      <p className='text-3xl text-gray-600 py-4'>Formik Data Comp</p>
      <MyFom />
      {stateData.map(({ id, title }) => {
        return (
          <>
            <div className='flex justify-between py-5'>
            <div className='flex space-x-2 w-1/2'>
              <p className='text-lg font-semibold'>{id}.</p>
              <p className='text-lg font-semibold'>{title}</p>
            </div>
            <div className='flex space-x-4 w-1/2 justify-start'>
              <button className="border px-3 py-1 rounded-md bg-slate-400 text-sm text-black hover:text-blue-500" onClick={() => dispatch(updateDataApi(id))}>edit</button>
              <button className="border px-3 py-1 rounded-md bg-slate-400 text-sm text-black hover:text-blue-500" onClick={() => dispatch(deleteDataApi(id))}>delete</button>
            </div>
            <hr/>
            </div>
          </>
        )
      })}
    </div>
  );
}

export default RandomData;
