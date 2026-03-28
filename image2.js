export default {
  async fetch(request) {
    const userAgent = request.headers.get("User-Agent") || "";
    // If Discord is "scraping" the link for a preview
    if (userAgent.includes("Discordbot")) {
      // Return your custom image URL
      return fetch("https://i.imgur.com/F9prE4R.png");
    }
    // If a human clicks it
    return Response.redirect("https://www.youtube.com/watch?v=tujgR1stxIM", 302);
  }
};
