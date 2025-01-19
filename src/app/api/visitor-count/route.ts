// src/app/api/visitor-count/route.ts

export async function GET() {
    if (typeof window === 'undefined') {
      // Make sure the code only runs on the client side
      return new Response(JSON.stringify({ count: 0 }), {
        status: 500,
      });
    }
  
    let count = parseInt(localStorage.getItem('visitorCount') || '0', 10);
    count++;
    localStorage.setItem('visitorCount', count.toString());
  
    return new Response(JSON.stringify({ count }), {
      status: 200,
    });
  }
  
  