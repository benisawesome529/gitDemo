import React from 'react';
import './App.css';
import Tile from './components/Tile';
import Card from './components/Card';
import Item from './components/Item'

function App() {
  return (
    //TODO:  Add multiple Card components inside the <Tile>
    //       Add several Item components to each <Card>
    //       (see the screenshot for the completed My TNT Exercise)
    <div>
      <h1 className="App-header">My TNT</h1>
      <Tile>
        <Card title="Testing" description="123" website="newtechnologists.com">        </Card>
        <Card title="Testing 2" description="456">    
           <Item name = "jasdhbhjadba"> </Item>"
            </Card>

        <Card title="Testing 2" description="456"></Card>
        
      </Tile>
    </div>
  );
  
}

export default App;
