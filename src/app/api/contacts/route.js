import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb'; // Using your existing connection
import Contact from '../../../models/Contact';

// --- GET: Fetch All Messages (For Admin) ---
export async function GET(request) {
  try {
    await connectDB();

    // Fetch all messages, newest first
    const contacts = await Contact.find({}).sort({ createdAt: -1 });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("GET Contacts Error:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

// --- DELETE: Delete a Message (Optional, for cleanup) ---
export async function DELETE(request) {
  try {
    await connectDB();
    const { id } = await request.json();

    await Contact.findByIdAndDelete(id);

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}