import db from "#db/client";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  await db.query("DELETE FROM employees;");

  const employees = [
    { name: "Alice Brown", birthday: "1990-04-12", salary: 60000 },
    { name: "Bob Smith", birthday: "1985-09-23", salary: 75000 },
    { name: "Carol Johnson", birthday: "1992-11-03", salary: 68000 },
    { name: "David Lee", birthday: "1988-06-15", salary: 72000 },
    { name: "Ella Green", birthday: "1995-03-27", salary: 54000 },
    { name: "Frank Adams", birthday: "1991-02-19", salary: 65000 },
    { name: "Grace Kim", birthday: "1987-07-10", salary: 70000 },
    { name: "Hank Miller", birthday: "1993-12-05", salary: 59000 },
    { name: "Ivy Parker", birthday: "1989-01-25", salary: 73000 },
    { name: "Jack Wilson", birthday: "1994-09-18", salary: 61000 },
  ];

  for (const emp of employees) {
    const result = await db.query(
      `INSERT INTO employees (name, birthday, salary)
       VALUES ($1, $2, $3)
       RETURNING *;`,
      [emp.name, emp.birthday, emp.salary]
    );
    console.log("Inserted:", result.rows[0]);
  }
}
