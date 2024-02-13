import {ExampleComponent} from "./components/example-component.tsx";
import {ExampleValueComponent} from "./components/example-value-component.tsx";
import {NumberDirectionComponent} from "./components/number-direction-component.tsx";
import {MutateContextDataComponent} from "./components/mutate-context-data-component.tsx";

function App() {
  return (
    <div className={'p-4'}>
      <h1 className={'text-4xl mb-4'}>Solution to prop-drilling using the React Context API</h1>
      <div className={'flex flex-col gap-8'}>
        <ExampleComponent/>
        <ExampleValueComponent/>
        <NumberDirectionComponent/>
        <MutateContextDataComponent/>
      </div>
    </div>
  )
}

export default App
