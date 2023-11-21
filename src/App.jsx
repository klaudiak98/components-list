import Button from "./components/Button"
import { GoBell, GoCalendar, GoDatabase } from 'react-icons/go'

const App = () => {
    return <div>
        <div>
            <Button success rounded outline><GoBell/> Click me!</Button>
        </div>
        <div>
            <Button danger outline><GoCalendar/> Dowload</Button>
        </div>
        <div>
            <Button warning><GoDatabase/>Store</Button>
        </div>
        <div>
            <Button secondary outline>Something</Button>
        </div>
        <div>
            <Button primary rounded>Hide Ads!</Button>
        </div>
    </div>
}

export default App