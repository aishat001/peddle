import './App.css';
import Layout from './component/Layout';
import Home from './component/pages/Home'
import Features from './component/pages/Features'
import Plans from './component/pages/Plans'
import Sponsors from './component/pages/Sponsors'
import Customers from './component/pages/Customers';

function App() {
  return (
    <div className="App">
        <Layout>
            <Home/>
            <Features/>
            <Plans/>
            <Sponsors/>
            <Customers/>
        </Layout>
    </div>
  );
}

export default App;
