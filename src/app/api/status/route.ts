import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('http://172.16.142.125:5000/api/status', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      // Forward the error from the external API
      return new NextResponse(
        `Error fetching from external API: ${response.status} ${response.statusText} - ${errorText}`,
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    // Handle network errors or other issues with the fetch call itself
    return new NextResponse(
      `Internal Server Error: ${error.message}`,
      { status: 500 }
    );
  }
}
