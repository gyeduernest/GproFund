import { Badge } from "flowbite-react";
import { Link } from "react-router-dom";



export default function Healthbadge() {
  return (
    <div>
          <Link to="/healthprojects">
          <Badge size="sm" className="px-1 text-xs">Health</Badge>
          </Link>
    </div>
  )
}
