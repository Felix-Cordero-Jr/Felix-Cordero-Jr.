import { getVisitorCount, incrementVisitorCount } from './storage';

export async function GET() {
  console.log('GET request received');
  try {
    // Increment visitor count
    const newCount = await incrementVisitorCount();
    console.log('Visitor count incremented:', newCount);

    // Get the updated visitor count
    const count = await getVisitorCount();
    console.log('Current visitor count:', count);

    // Return the updated visitor count as a JSON response
    return new Response(
      JSON.stringify({ count }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error handling visitor count:', error);

    // Fallback error response in case something goes wrong
    return new Response(
      JSON.stringify({ count: 0 }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
