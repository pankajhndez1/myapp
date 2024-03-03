import './App.css';
import {useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteDataApi, myAsyncFunc, updateDataApi } from './actions';

function App() {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.getDataReducer);

  useEffect(() => {
    dispatch(myAsyncFunc())
  }, [])

  return (
    <div className="App">
      <h1>Data</h1>
      {stateData.map(({ id, title }) => {
        return (
          <>
            <p>{id}</p>
            <p>{title}</p>
            <button onClick={()=>dispatch(updateDataApi(id))}>edit</button>
            <button onClick={()=>dispatch(deleteDataApi(id))}>delete</button>
          </>
        )
      })}
    </div>
  );
}

export default App;
