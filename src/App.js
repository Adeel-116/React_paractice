import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello.jsx';
import Header from './components/Header.js';

function App() {

    const nameData = [
      {
        myid: 1,
        myname: "Adeel"
      },
      {
        myid: 2,
        myname: "Adeel323"
      },
      {
        myid: 3,
        myname: "Adeel54564"
      }
    ];

  return (
    <>
    <Hello  mydata={nameData}/>
    </>
  );
}

export default App;
