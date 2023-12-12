const Table = ({ config, data, keyFn }) => {

    const renderedHeaders = config.map((col) => (
        <th key={col.label}>{col.label}</th>
    ))

    const renderedRows = data.map((row) => {
        const renderedCells = config.map((col) => (
            <td key={col.label} className="p-3">{col.render(row)}</td>
        ))

       return (
       <tr className="border-b" key={keyFn(row)}>
            {renderedCells}
        </tr>
    )})

  return (
    <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>
  )
}

export default Table