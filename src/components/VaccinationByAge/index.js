import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {ageData} = props
  console.log(ageData)
  return (
    <div>
      <h1>Vaccination by Age</h1>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart margin={{bottom: 300}}>
          <Pie
            cx="50%"
            cy="50%"
            data={ageData}
            startAngle={0}
            endAngle={360}
            outerRadius="100%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
