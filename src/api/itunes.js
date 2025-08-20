// src/api/itunes.js
// This file handles all communication with the iTunes API.

/**
 * Fetches "lofi" tracks from the iTunes Search API.
 * @returns {Promise<Array>} A promise that resolves to an array of track objects.
 */
export const getLofiTracks = async () => {
  // Use a hardcoded search term for "lofi".
  const searchTerm = 'lofi';
  const entityType = 'song';
  const limit = 20;

  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=${entityType}&limit=${limit}`);
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // The API returns a 'results' array which contains the track data.
    // We map over it to create a cleaner object for our app.
    const tracks = data.results.map(track => ({
      id: track.trackId,
      title: track.trackName,
      artist: track.artistName,
      albumArt: track.artworkUrl100, // artworkUrl100 is a small image, we can find a larger version if needed.
      audioUrl: track.previewUrl,
    }));

    return tracks;
  } catch (error) {
    console.error("Failed to fetch tracks from iTunes API:", error);
    return []; // Return an empty array on error to prevent the app from crashing.
  }
};
