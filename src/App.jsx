import FunctionComponent from './Components/component/Function'
import './App.css'
import ClassComponent from './Components/component/Class'
import Props from './Components/props/Props'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-primary font-secondary">Function Component vs Class Components</h1>
      <FunctionComponent />
      <ClassComponent></ClassComponent>


      <h1 className="text-3xl font-bold text-primary font-secondary">Props Example</h1>
      <Props name="John Doe" age={30} location="New York" message="passsing props" />
      <Props />
    </>
  )
}

export default App
