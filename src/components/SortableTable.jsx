import Table from "./Table"
import useSort from "../hooks/useSort";
import { GoArrowDown, GoArrowUp} from 'react-icons/go'

const SortableTable = (props) => {
    const { config, data } = props;
    const { 
        sortOrder,
        sortBy,
        setSortColumn,
        sortedData
    } = useSort(data, config)

    const updatedConfig = config.map((column) => {
        return column.sortValue 
            ? {
                ...column,
                header: () => (
                    <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                        <div className="flex item-center">
                            {getIcons(column.label, sortBy, sortOrder)}
                            {column.label}
                        </div>
                    </th>
                )
            } 
            : column;
    })

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