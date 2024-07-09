
import './App.css'
import { useUserState } from './state/User'

function App() {

  const { setData, resetData } = useUserState();

  return (
    <>
      <UserCard />
      <input type="text" name="username" id="input" onChange={(e) => setData({name: e.target.value})} />
      <button onClick={() => {
        resetData()
      }}>Reset</button>
    </>
  )
}

const UserCard = () => {
  const { data } = useUserState();
  return (
    <>
      <h1 className='text-xl font-bold'>{data?.name}</h1>
    </>
  )
}

export default App
