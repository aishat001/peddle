import './App.css';
import Layout from './component/Layout';
import Home from './component/pages/Home'
import Features from './component/pages/Features'
import Plans from './component/pages/Plans'

function App() {
  return (
    <div className="App">
        <Layout>
            <Home/>
            <Features/>
            <Plans/>
        </Layout>
    </div>
  );
}

export default App;
