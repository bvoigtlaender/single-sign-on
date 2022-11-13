import React from 'react'
import './styles/reset.css'
import './styles/app.css'
import UserTable from "./components/UserTable";
import RightTable from './components/RightTable';
import Switch from './components/Switch/Switch';
import { useState } from 'react';

export function App() {
  const [tab, setTab] = useState(2);

  let route

  switch (tab) {
    case 0:
      route = <UserTable />
      break
    case 1:
      route = <UserTable />
      break
    default:
      route = <h1>404</h1>
  }

  return <>
    <Switch options={['Users', 'Accessrights', 'Roles']} selected={tab} onSelect={setTab} />
    {route}
    <p className='copyright'>made by bjarne</p>
  </>;
}