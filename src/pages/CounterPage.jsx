import Button from '../components/Button'
import useCounter from '../hooks/useCounter'

const CounterPage = ({initialCount}) => {
 
  const { count, increment } = useCounter(initialCount)

  return <div>
        {count}
        <Button onClick={increment}>Increment</Button>
    </div>
}

export default CounterPage