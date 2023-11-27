import { useState } from "react"
import Dropdown from "../components/Dropdown"

const DropdownPage = () => {
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ]

    const [selection, setSelection] = useState(null)

    const handleSelect = (option) => {
        setSelection(option)
    }

    return (
        <Dropdown options={options} onSelect={handleSelect} selection={selection}/>
    )
}

export default DropdownPage