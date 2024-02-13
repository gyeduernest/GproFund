import { Badge } from "flowbite-react";
import { Link } from "react-router-dom";



export default function Agriculturebadge() {
  return (
    <div>
          <Link to="/agricprojects">
          <Badge size="sm" className="px-1 text-xs">Agriculture</Badge>
          </Link>
    </div>
  )
}
