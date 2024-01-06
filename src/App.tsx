import pillsLogo from './assets/medicines.png';
import Pill from './components/Pill.tsx';

function App() {
  return (
    <>
      <img
        src={pillsLogo}
        className="mx-auto h-36 w-36 p-6 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.4)]"
        alt="Three cute pills with faces"
      />
      <h1 className="text-5xl">React Pills</h1>
      <div className="p-8">
        <Pill text="Hello pill" />
      </div>
    </>
  );
}

export default App;
