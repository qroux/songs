import React from 'react';
import SongList from './song_list.jsx';
import SongDetail from './song_detail.jsx';


const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};


export default App;
