import { Card } from './components/'
import movies from './data.json'

function App() {
  return (
    <main>
      {movies.map((movie) => (
        <Card className="mr"></Card>
      ))}
    </main>
  )
}

export default App
