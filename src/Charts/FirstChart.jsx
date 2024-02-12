"use-client"

import { Bar,  BarChart,  CartesianGrid,  ResponsiveContainer, XAxis, YAxis } from "recharts";


export default function Firstchart() {
const data = [
                        {id:1,  amount:2000, category:"Educa"},
                        {id:2,  amount:4346, category:"Agric"},
                        {id:3,  amount:5476, category:"Sports"},
                        {id:4,  amount:4575, category:"Health"}
]




return(

          <ResponsiveContainer width="100%" height="100%" >
            <p className="text-sm font-bold lg:text-2xl">Donations done by  Category</p>
            <BarChart
            width={600}
            height={500}
            data={data}
            margin={{
              
              
              right:10,
              bottom: 0,
            }}>
              
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="category"/>
              <YAxis dataKey="amount"/>
              <Bar type="monotone"  dataKey="amount" fill="teal"/>          
            </BarChart>
          </ResponsiveContainer>

)
}
