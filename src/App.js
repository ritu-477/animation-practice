import logo from './logo.svg';
import './App.css';
import Animation from './component/Animation';
import GsapAnimation from './component/GsapAnimation';
import TiltAnimation from './component/TiltAnimation.jsx';

function App() {
  return (
    <>
      <GsapAnimation />
      <Animation />
      <TiltAnimation />

    </>
  );
}

export default App;
