import FunctionComponent from './Components/component/Function'
import './App.css'
import ClassComponent from './Components/component/Class'
import Props from './Components/props/Props'
import State from './Components/state/State'

function App() {

  return (
    <div className="mx-4 mt-4">
      <h1 className="text-3xl font-bold text-primary font-secondary">Function Component vs Class Components</h1>
      <FunctionComponent />
      <ClassComponent></ClassComponent>


      <h1 className="text-3xl font-bold text-primary font-secondary">Props Example</h1>
      <div className='flex flex-wrap'>
        <Props name="John Doe" age={30} location="New York" message="passsing props" />
      <Props />
      </div>


      <h1 className='text-3xl font-bold text-primary font-secondary'>State Example</h1>
      <State />
    </div>
  )
}

export default App
