import { Badge } from "flowbite-react";
import { Link } from "react-router-dom";



export default function Educationbadge() {
  return (
    <div>
          <Link to="/educationprojects">
          <Badge size="sm" className="px-1 text-xs">Education</Badge>
          </Link>
    </div>
  )
}
