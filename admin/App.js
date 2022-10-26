import './styles/reset.css'
import './styles/app.css'
import UserList from "./components/UserList";

export function App() {
  return <div>
    <UserList />
    <p className='copyright'>made by bjarne</p>
  </div>;
}