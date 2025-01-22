import { getVisitorCount, incrementVisitorCount } from './db';

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Return the current visitor count
        res.status(200).json({ count: getVisitorCount() });
    } else if (req.method === 'POST') {
        // Increment the visitor count
        incrementVisitorCount();
        res.status(200).json({ message: 'Visitor count incremented' });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
