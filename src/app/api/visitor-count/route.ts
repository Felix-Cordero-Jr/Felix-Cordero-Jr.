import { NextRequest } from 'next/server';
const { getVisitorCount, incrementVisitorCount } = require('./storage');

export async function GET(request: NextRequest) {
  const cookie = request.headers.get('cookie');
  const hasVisited = cookie && cookie.includes('visited=true');

  if (!hasVisited) {
    incrementVisitorCount();  // Increment the count using the storage function.
    const response = new Response(JSON.stringify({ count: getVisitorCount() }), {
      status: 200,
    });
    response.headers.append('Set-Cookie', 'visited=true; HttpOnly; Path=/; Max-Age=3600'); // Set cookie for 1 hour
    return response;
  }

  return new Response(JSON.stringify({ count: getVisitorCount() }), {
    status: 200,
  });
}
