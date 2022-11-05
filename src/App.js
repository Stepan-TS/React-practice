import React from 'react';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import ListMovies from './components/ListMovies';
import RealtimeMovies from './components/RealtimeMovies';

function App() {
  return (
    <div className="App">
      {/*<ListMovies /> */}
      <RealtimeMovies />
      <AddMovie />
      <EditMovie />
    </div>
  );
}

export default App;
