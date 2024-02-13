import { Badge } from "flowbite-react";
import { Link } from "react-router-dom";



export default function Sportsbadge() {
  return (
    <div>
          <Link to="/sportsprojects">
          <Badge size="sm" className="px-1 text-xs">Sports</Badge>
          </Link>
    </div>
  )
}
