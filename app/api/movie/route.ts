export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get("search") || "";

    console.log(`Received search query: ${searchQuery}`);
    
    // Here you would typically perform a search against your movie database
    // For demonstration, we'll just return the search query in the response
    return new Response(`You searched for: ${searchQuery}`);
}