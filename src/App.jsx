import Button from "./components/Button"

const App = () => {
    return <div>
        <div>
            <Button success rounded outline>Click me</Button>
        </div>
        <div>
            <Button danger outline>Buy Now!</Button>
        </div>
        <div>
            <Button warning>See Deal!</Button>
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