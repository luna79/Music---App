// src/components/TrackList.jsx   
import React from 'react';
import TrackCard from './TrackCard.jsx';

const TrackList = ({ tracks, onSelectTrack, currentTrack }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-6">
      <h2 className="text-lg font-semibold text-white mb-4">Tracklist</h2>
      <div className="space-y-4">
        {tracks.length > 0 ? (
          tracks.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              isSelected={currentTrack && currentTrack.id === track.id}
              onClick={onSelectTrack}
            />
          ))
        ) : (
          <p className="text-gray-400">No tracks found.</p>
        )}
      </div>
    </div>
  );
};

export default TrackList;