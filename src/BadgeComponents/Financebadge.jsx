import { Badge } from "flowbite-react";
import { Link } from "react-router-dom";



export default function Financebadge() {
  return (
    <div>
          <Link to="/financeprojects">
          <Badge size="sm" className="px-1 text-xs">Finance</Badge>
          </Link>
    </div>
  )
}
