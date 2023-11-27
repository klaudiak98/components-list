import { useState } from "react"
import { GoChevronDown } from 'react-icons/go'
import Panel from "./Panel"

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
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {selection?.label || 'Select...'}
        <GoChevronDown className="text-lg"/>
      </Panel>
      {isOpen && 
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      }
    </div>
  )
}

export default Dropdown