import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddItem from './components/layout/AddItem';
import AddLogModal from './components/layout/AddLogModal';

function App() {
  React.useEffect(() => {
    M.AutoInit();
  })
  return (
    <div>
      <SearchBar />
      <Logs />
      <AddLogModal />
      <AddItem />
    </div>
  );
}

export default App;