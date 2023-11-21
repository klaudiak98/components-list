import Button from "../components/Button"
import { GoBell, GoCalendar, GoDatabase } from 'react-icons/go'

const ButtonPage = () => {
    const handleClick = () => {
        console.log('clik')
    }

    return <div>
        <div>
            <Button 
                success 
                rounded 
                outline 
                classes="mb-2" 
                onClick={handleClick}
            ><GoBell/> Click me!</Button>
        </div>
        <div>
            <Button danger outline onMouseEnter={handleClick}><GoCalendar/> Dowload</Button>
        </div>
        <div>
            <Button warning onMouseLeave={handleClick}><GoDatabase/>Store</Button>
        </div>
        <div>
            <Button secondary outline>Something</Button>
        </div>
        <div>
            <Button primary rounded>Hide Ads!</Button>
        </div>
    </div>
}

export default ButtonPage