import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
});

export default async function executeQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}




// import executeQuery from './db';

// export default async (req, res) => {
//     const { id } = req.query;
//     const query = 'SELECT * FROM users WHERE id = ?';
//     const values = [id];
//     const results = await executeQuery({ query, values });
  
//     if (results.error) {
//       res.status(500).json({ message: 'Error querying the database' });
//       return;
//     }
  
//     res.json(results[0]);
//   }