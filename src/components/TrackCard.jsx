// src/components/TrackCard.jsx
import React from 'react';

const TrackCard = ({ track, isSelected, onClick }) => {
  return (
    <div
      onClick={() => onClick(track)}
      className={`
        flex items-center space-x-4 p-4 rounded-xl cursor-pointer
        transition-all duration-200 ease-in-out
        ${isSelected ? 'bg-blue-600 text-white shadow-xl' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}
      `}
    >
      <img
        src={track.albumArt.replace('100x100bb.jpg', '500x500bb.jpg')}
        alt={`${track.title} album art`}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-medium">{track.title}</h3>
        <p className="text-sm text-gray-400">{track.artist}</p>
      </div>
    </div>
  );
};

export default TrackCard;
