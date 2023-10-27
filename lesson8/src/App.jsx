import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentVietnamTime, setCurrentVietnamTime] = useState(new Date());

  // Update Vietnam time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVietnamTime(new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' })));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
        <div className="selected-date-info">
        <b>Thời gian: {currentVietnamTime.toLocaleTimeString('en-US')}</b>
        <br/>
        <b>Ngày: {selectedDate.toLocaleDateString('en-US')}</b>
      </div>
      <div className="calendar-container">
        <Calendar value={selectedDate} onChange={handleDateChange} />
      </div>
    </div>
  );
};

export default App;
