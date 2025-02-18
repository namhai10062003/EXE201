import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000'); // Server URL for Socket.io

const App = () => {
  const [meetingId, setMeetingId] = useState('');
  const [meetingUrl, setMeetingUrl] = useState('');
  const [error, setError] = useState('');
  const [isJoined, setIsJoined] = useState(false); // To track if user joined
  const [iframeLoaded, setIframeLoaded] = useState(false); // Track if iframe is loaded

  useEffect(() => {
    // Handle socket events (e.g., meeting-created)
    socket.on('meeting-created', (data) => {
      setMeetingId(data.meetingId); // Set meetingId
      setMeetingUrl(data.meetingUrl); // Set meeting URL
    });

    socket.on('error', (data) => {
      setError(data.message);
    });

    return () => {
      socket.off('meeting-created');
      socket.off('error');
    };
  }, []);

  // Create meeting and get Meeting ID
  const createMeeting = () => {
    socket.emit('create-meeting', {}, (response) => {
      console.log('Meeting created:', response);
    });
  };

  // Join meeting and enable camera & mic
  const joinMeeting = () => {
    if (meetingUrl) {
      const iframe = document.createElement('iframe');
      iframe.src = meetingUrl; // Set meeting URL to iframe src
      iframe.style.width = '100%';
      iframe.style.height = '500px'; // Adjust the height of iframe as needed
      iframe.style.border = 'none';
      iframe.allow = 'camera; microphone'; // Allow camera and microphone

      // Append iframe to the document body (or any container div)
      const container = document.getElementById('meeting-container');
      container.innerHTML = ''; // Clear any existing iframe
      container.appendChild(iframe);
      setIframeLoaded(true); // Set iframeLoaded to true
      setIsJoined(true);
    }
  };

  return (
    <div className="App">
      <h1>Daily.co Video Meeting</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button onClick={createMeeting}>Create Meeting</button>

      {meetingId && !isJoined && (
        <>
          <p><strong>Meeting ID:</strong> {meetingId}</p> {/* Display Meeting ID */}
          <button onClick={joinMeeting}>Join Meeting</button>
        </>
      )}

      {isJoined && !iframeLoaded && <p>Joining the meeting...</p>} {/* Show message while loading */}

      <div id="meeting-container"></div> {/* Container for the iframe */}

    </div>
  );
};

export default App;
