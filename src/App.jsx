import ButtonPage from "./pages/ButtonPage"
import AccordionPage from "./pages/AccordionPage"
import DropdownPage from "./pages/DropdownPage"
import Link from "./components/Link"
import Route from "./components/Route"

const App = () => {
   
    return <div>
        <Link to="/button">button</Link><br/>
        <Link to="/accordion">accordion</Link><br/>
        <Link to="/dropdown">dropdown</Link>
        <div>
            <Route path='/button'>
                <ButtonPage/>
            </Route>
            <Route path='/accordion'>
                <AccordionPage/>
            </Route>
            <Route path='/dropdown'>
                <DropdownPage/>
            </Route>
        </div>
    </div>
}

export default App