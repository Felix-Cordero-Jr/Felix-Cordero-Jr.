// src/app/api/visitor-count/route.ts

let visitorCount = 0;  // In-memory store for demonstration, will reset on server restart

export async function GET() {
  try {
    // Increment visitor count
    visitorCount++;

    // Return the updated visitor count as a JSON response
    return new Response(
      JSON.stringify({ count: visitorCount }),
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
