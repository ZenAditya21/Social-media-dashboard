import React from 'react'
import './Styles/global.css';
import Header from './Components/Header.js'
import TopCardList from './Components/top-card-list.js'
import Overview from './Components/Overview.js'
import Switch from './Components/Switch.js'

function App() {
  return (
    <>
    <Header>
      <Switch/>
    </Header>
    <TopCardList/>
    <Overview/>
    </>
  );
}

export default App;