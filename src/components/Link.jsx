import classNames from "classnames"
import useNavigation from '../hooks/useNavigationContext'

const Link = ({to, children}) => {
    const {navigate} = useNavigation()
    
    const classes = classNames('text-blue-500')

    const handleClick = (event) => {
      if (event.metaKey || event.ctrlKey) {
        return
      }
      event.preventDefault()
      navigate(to)
    }

  return ( 
    <a href={to} onClick={handleClick} className={classes}>{children}</a>
  )
}

export default Link