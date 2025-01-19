// src/app/api/visitor-count/route.ts

let visitorCount = 0;  // This is an in-memory store, which will reset when the server restarts.

export async function GET() {
  visitorCount++;  // Increment the count on each visit.

  return new Response(JSON.stringify({ count: visitorCount }), {
    status: 200,
  });
}
