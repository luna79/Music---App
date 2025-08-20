// src/components/Player.jsx
import React, { useRef, useEffect } from 'react';

// SVG Icons for Play and Pause
const PlayIcon = ({ size = 24, fill = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    width={size}
    height={size}
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ size = 24, fill = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    width={size}
    height={size}
  >
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const Player = ({ currentTrack, isPlaying, onTogglePlay, onNextTrack }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  const handleEnded = () => {
    onNextTrack();
  };

  return (
    <div className="bg-gray-800 p-6 rounded-b-xl shadow-lg flex flex-col items-center justify-center">
      {currentTrack ? (
        <>
          <img
            src={currentTrack.albumArt.replace('100x100bb.jpg', '500x500bb.jpg')}
            alt={`${currentTrack.title} album art`}
            className="w-48 h-48 rounded-xl shadow-2xl mb-4 transform transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <h2 className="text-xl font-semibold text-white mb-1">
            {currentTrack.title}
          </h2>
          <p className="text-sm text-gray-400 mb-4">{currentTrack.artist}</p>
          <button
            onClick={onTogglePlay}
            className="bg-gray-700 text-white p-4 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isPlaying ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
          </button>
          <audio
            ref={audioRef}
            src={currentTrack.audioUrl}
            onEnded={handleEnded}
            autoPlay
          ></audio>
        </>
      ) : (
        <p className="text-gray-400">Select a track to start playing.</p>
      )}
    </div>
  );
};

export default Player;
