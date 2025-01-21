// src/app/api/visitor-count/route.ts

import { getVisitorCount, incrementVisitorCount } from './storage';

export async function GET() {
  try {
    // Increment visitor count
    const newCount = incrementVisitorCount();

    // Return the updated visitor count as a JSON response
    return new Response(
      JSON.stringify({ count: newCount }),
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
