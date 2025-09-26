import './App.css'
import showMessage from "./components/showMessage"

function App() {
  return (
    <div className="App">
      <h1>Javajscript example</h1>
      
      <button onClick={showMessage}>Click me</button>
    </div>
  )
}

export default App
