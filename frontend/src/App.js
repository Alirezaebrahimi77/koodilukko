import KeyPad from "./components/KeyPad";
import{ Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="container">
      <KeyPad/>
      <Toaster />
    </div>
  );
}

export default App;
