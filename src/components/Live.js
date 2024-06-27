import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css'; // Import your index.css file

const API_KEY = 'AIzaSyC69PefpAJi2d6EjmWV5yAL6QPzWNt9FzE'; // Replace with your actual YouTube API key
const CHANNEL_ID = 'UCBxvaAVEhDrBRj4QgG4Ezvw'; // Replace with your YouTube channel ID

const Live = () => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`
        );

        const liveVideos = response.data.items;
        const isLiveStream = liveVideos.length > 0;

        setIsLive(isLiveStream);
      } catch (error) {
        console.error('Error fetching live status:', error);
      }
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>{isLive ? 'We are currently Live' : 'We are currently not Live'}</h2>
      <div className="live-video-container">
        {isLive && (
          <iframe
            title="Live Stream"
            src={`https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default Live;
