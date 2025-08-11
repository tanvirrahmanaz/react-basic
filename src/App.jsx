import FunctionComponent from './Components/component/Function'
import './App.css'
import ClassComponent from './Components/component/Class'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-primary font-secondary">Function Component vs Class Components</h1>
      <FunctionComponent />
      <ClassComponent></ClassComponent>
    </>
  )
}

export default App
