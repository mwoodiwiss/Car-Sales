import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (state) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header state={state}/>
        <AddedFeatures state={state}/>
      </div>
      <div className="box">
        <AdditionalFeatures state={state}/>
        <Total state={state}/>
      </div>
    </div>
  );
};

export default App;
