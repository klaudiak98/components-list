
import { useState } from "react"
// import ButtonPage from "./pages/ButtonPage"
// import AccordionPage from "./pages/AccordionPage"
import Dropdown from "./components/Dropdown"

const App = () => {
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ]

    const [selection, setSelection] = useState(null)

    const handleSelect = (option) => {
        setSelection(option)
    }

    return <div>
        {/* <ButtonPage/> */}
        {/* <AccordionPage/> */}
        <Dropdown options={options} onSelect={handleSelect} selection={selection}/>
    </div>
}

export default App