import Table from "./Table"
import { useState } from "react";
import { GoArrowDown, GoArrowUp} from 'react-icons/go'

const SortableTable = (props) => {
    const { config, data } = props;
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc')
            setSortBy(label)
            return
        }

        if (sortOrder === null)
        {
            setSortOrder('asc')
            setSortBy(label)
        }
        else if (sortOrder === 'asc')
        {
            setSortOrder('desc')
            setSortBy(label)
        } else {
            setSortOrder(null)
            setSortBy(null)
        }
    }

    const updatedConfig = config.map((column) => {
        return column.sortValue 
            ? {
                ...column,
                header: () => (
                    <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                        <div className="flex item-center">
                            {getIcons(column.label, sortBy, sortOrder)}
                            {column.label}
                        </div>
                    </th>
                )
            } 
            : column;
    })

    let sortedData = data;
    if (sortBy && sortOrder) {
        const { sortValue } = config.find(col => col.label === sortBy)
        sortedData = [...data].sort((a,b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            return typeof valueA === 'string'
            ? valueA.localeCompare(valueB)* reverseOrder
            : (valueA - valueB) * reverseOrder
        })
    }


    return <div>
            <Table {...props} data={sortedData} config={updatedConfig}/>
        </div>
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowUp/>
            <GoArrowDown/>
        </div>
    }
    
    if (sortOrder === null) {
        return <div>
            <GoArrowUp/>
            <GoArrowDown/>
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <GoArrowUp/>
        </div>
    } else return <div>
            <GoArrowDown/>
        </div>
}

export default SortableTable