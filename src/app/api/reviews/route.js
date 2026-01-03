import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb'; // Ensure this path is correct
import Review from '../../../models/Review';

// --- GET: Fetch Reviews ---
export async function GET(request) {
  try {
    await connectDB();

    // Check if the caller is the Admin Page
    const { searchParams } = new URL(request.url);
    const isAdmin = searchParams.get('admin') === 'true';

    let query = {};
    
    // If NOT admin, only show approved reviews
    if (!isAdmin) {
      query.isApproved = true;
    } 
    // If IS admin, query remains {} so we fetch ALL reviews (pending & approved)

    const reviews = await Review.find(query).sort({ createdAt: -1 });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

// --- POST: Create Review ---
export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Create the review
    const newReview = await Review.create(data);
    
    return NextResponse.json({ message: "Review Created", review: newReview }, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ message: "Error submitting review" }, { status: 500 });
  }
}

// --- PUT: Approve/Hide Review ---
export async function PUT(request) {
  try {
    await connectDB();
    const { id, isApproved } = await request.json();

    const updatedReview = await Review.findByIdAndUpdate(
      id, 
      { isApproved }, 
      { new: true } // Return the updated document
    );

    return NextResponse.json({ message: "Updated", review: updatedReview });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

// --- DELETE: Delete Review ---
export async function DELETE(request) {
  try {
    await connectDB();
    const { id } = await request.json();

    await Review.findByIdAndDelete(id);

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}