import { useState } from "react"
import { GoChevronDown } from 'react-icons/go'

const Dropdown = ({ options, selection, onSelect  }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    onSelect(option)
  }

  const renderedOptions = options.map((option) => (
      <div className="hover:bg-sky-100 rounded cursor-pointer" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>    
  ))

  return (
    <div className="w-48 relative">
      <div className="flex justify-between items-center cursor-pointerborder rounded p-3 shadow bg-white  w-full" onClick={handleClick}>
        {selection?.label || 'Select...'}
        <GoChevronDown className="text-lg"/>
      </div>
      {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown