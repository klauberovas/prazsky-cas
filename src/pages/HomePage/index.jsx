import './style.css';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [datetime, setDatetime] = useState('');
  const [timezone, setTimezone] = useState('Europe/Prague');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://worldtimeapi.org/api/timezone/${timezone}`,
      );
      const data = await response.json();
      setDatetime(data.datetime);
    };
    fetchData();
  }, [timezone]);

  return (
    <div className="container">
      <p>{datetime}</p>
      <select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
        <option value="America/New_York">New York</option>
        <option value="Europe/London">Londýn</option>
        <option value="Europe/Moscow">Moskva</option>
        <option value="Europe/Prague">Praha</option>
        <option value="Asia/Hong_Kong">Hong Kong</option>
        <option value="Asia/Jerusalem">Jeruzalém</option>
      </select>
    </div>
  );
};
