const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const queryString = `
SELECT students.name, students.id, cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2
`;
const values = [`%${process.argv[2]}%`, `${process.argv[3]}`]
pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
}).catch(err => console.error('query error', err.stack));