import React from 'react';
import Card from "./Card";
import {data} from './data';

function App() {
  return (
    <div>
      {data.map(item => (
        <Card title={item.title} description={item.description} image={item.image} tags={item.tags} key={item.id} id={item.id}/>
      ))}
    </div>
  );
}

export default App;
