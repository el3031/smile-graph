import ForceGraph2D from 'react-force-graph-2d';
import './App.css';

function App() {
  return (
    <div className="App">
      <ForceGraph2D 
        graphData={genRandomTree()}/>
    </div>
  );
}

function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map(i => ({ id: i })),
      links: [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      [reverse ? 'target' : 'source']: id,
      [reverse ? 'source' : 'target']: Math.round(Math.random() * (id-1))
    }))
  };
}


export default App;
