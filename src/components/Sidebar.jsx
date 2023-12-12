import Link from "./Link"

const Sidebar = () => {
    const links = [
        {label: 'Button', path: '/button'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Dropdown', path: '/dropdown'},
        {label: 'Modal', path: '/modal'},
        {label: 'Table', path: '/table'},
    ]

    const renderedLinks = links.map(link => (
        <Link key={link.label} to={link.path} className="mb-3" activeClassName="text-bold border-l-4 border-blue-500 pl-2 items-start">{link.label}</Link>
    ))
  return (
    <div className="sticky top-0 flex flex-col">
        {renderedLinks}
    </div>
  )
}

export default Sidebar