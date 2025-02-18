import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000'); // Kết nối đến server Socket.io

const UserDashboard = () => {
  const [meetingId, setMeetingId] = useState('');
  const [meetingUrl, setMeetingUrl] = useState('');
  const [error, setError] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    // Lắng nghe sự kiện cuộc họp được tạo
    socket.on('meeting-created', (data) => {
      setMeetingId(data.meetingId);
      setMeetingUrl(data.meetingUrl);
    });

    socket.on('error', (data) => {
      setError(data.message);
    });

    return () => {
      socket.off('meeting-created');
      socket.off('error');
    };
  }, []);

  const joinMeeting = () => {
    if (meetingUrl) {
      const iframe = document.createElement('iframe');
      iframe.src = meetingUrl;
      iframe.style.width = '100%';
      iframe.style.height = '500px';
      iframe.style.border = 'none';
      iframe.allow = 'camera; microphone';

      const container = document.getElementById('meeting-container');
      container.innerHTML = '';
      container.appendChild(iframe);
      setIsJoined(true);
    }
  };

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {meetingId ? (
        <>
          <p><strong>Meeting ID:</strong> {meetingId}</p>
          <button onClick={joinMeeting}>Join Meeting</button>
        </>
      ) : (
        <p>Waiting for the meeting to be created...</p>
      )}

      <div id="meeting-container"></div>
    </div>
  );
};

export default UserDashboard;
