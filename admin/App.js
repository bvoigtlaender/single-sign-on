import './styles/reset.css'
import './styles/app.css'
import UserList from "./components/UserList";
import Switch from './components/Switch/Switch';
import { useState } from 'react';
import RightList from './components/RightList';

export function App() {
  const [tab, setTab] = useState(2);

  let route

  switch (tab) {
    case 0:
      route = <UserList />
      break
    case 1:
      route = <RightList />
      break
    default:
      route = <h1>404</h1>
  }

  return <>
    <Switch options={['Users', 'Accessrights', 'Roles']} selected={tab} setSelected={setTab} />
    {route}
    <p className='copyright'>made by bjarne</p>
  </>;
}