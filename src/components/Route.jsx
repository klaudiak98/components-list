import useNavigation from '../hooks/useNavigationContext'

const Route = ({path, children}) => {
    const {currentPath} = useNavigation()

    if (path === currentPath) {
        return children
    }
    return null
}

export default Route