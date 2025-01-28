import { Client } from 'pg';

// Create a PostgreSQL client instance
const client = new Client({
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT || '5432', 10),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

client.connect(); // Connect to the PostgreSQL database

export async function GET() {
  try {
    // Query the database to get the current visitor count
    const result = await client.query('SELECT count FROM visitor_count WHERE id = 1');
    const count = result.rows[0]?.count || 0; // Fallback to 0 if no count exists

    return new Response(
      JSON.stringify({ count }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return new Response('Failed to fetch visitor count', { status: 500 });
  }
}

export async function POST() {
  try {
    // Increment the visitor count in the database
    const result = await client.query('UPDATE visitor_count SET count = count + 1 WHERE id = 1 RETURNING count');
    const updatedCount = result.rows[0].count;

    return new Response(
      JSON.stringify({ count: updatedCount }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error incrementing visitor count:', error);
    return new Response('Failed to increment visitor count', { status: 500 });
  }
}
