import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hallo Welt!</h1>
        <br/>
        <h2>HTML/CSS/JS!</h2>
        <h3>
            <i>
                <b>Kenntnisse</b>
            </i>
        </h3>
        <progress min = "0" max = "100" value = "79"></progress>
        <label for = "file">HTML </label>
        <br/>
        <br/>
        <progress min = "0" max = "100" value = "70"></progress>
        <label for = "file">CSS</label>
        <br/>
        <br/>
        <progress min = "0" max = "100" value = "62"></progress>
        <label for = "file">CJ</label>
    </div>
  );
}

export default App;
