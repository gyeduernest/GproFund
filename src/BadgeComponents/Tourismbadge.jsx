import { Badge } from "flowbite-react";
import { Link } from "react-router-dom";



export default function Tourismbadge() {
  return (
    <div>
          <Link to="/tourismprojects">
          <Badge size="sm" className="px-1 text-xs">Tourism</Badge>
          </Link>
    </div>
  )
}
