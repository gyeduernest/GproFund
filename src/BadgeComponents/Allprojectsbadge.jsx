import { Badge } from "flowbite-react"
import { Link } from "react-router-dom"


export default function Allprojectsbadge() {
  return (
    <div>
      <Link to="/projects">
          <Badge size="sm" className="px-1 text-xs">All Projects</Badge>
          </Link>
    </div>
  )
}
