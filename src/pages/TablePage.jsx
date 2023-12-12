import Table from "../components/Table"

const TablePage = () => {

  const config = [
    {
      label: 'Fruit',
      render: (fruit) => fruit.name
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score
    }
  ]

  const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4},
  ]

  const keyFn = (data) => {
    return data.name
  }

  return (
    <div>
        <Table config={config} data={data} keyFn={keyFn}/>
    </div>
  )
}

export default TablePage