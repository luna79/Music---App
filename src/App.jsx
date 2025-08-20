// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import TrackList from './components/TrackList';
import { getLofiTracks } from './api/itunes';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch tracks from the iTunes API when the component mounts.
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await getLofiTracks();
        setTracks(fetchedTracks);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchTracks();
  }, []);

  const handleSelectTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    if (currentTrack) {
      const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
      const nextIndex = (currentIndex + 1) % tracks.length;
      setCurrentTrack(tracks[nextIndex]);
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4 font-sans text-gray-100">
      <div className="w-full max-w-lg mx-auto">
        <Header />
        <Player
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          onNextTrack={handleNextTrack}
        />
        {isLoading ? (
          <div className="text-center py-6">
            <p className="text-gray-400">Loading tracks...</p>
          </div>
        ) : error ? (
          <div className="text-center py-6">
            <p className="text-red-500">Error: {error}</p>
          </div>
        ) : (
          <TrackList
            tracks={tracks}
            onSelectTrack={handleSelectTrack}
            currentTrack={currentTrack}
          />
        )}
      </div>
    </div>
  );
};

export default App;