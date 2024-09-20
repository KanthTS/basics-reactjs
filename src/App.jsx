import Event from './events/Event';
import First from './components/first/First';
import Products from './components/second/Products';
import States from './events/States';
import Effect from './events/Effects';
function App() {
  return (
    <div>
        <First/>
        <Products/>
        <Event></Event>
        <States/>
        <Effect></Effect>
    </div>
    
  )
}

export default App