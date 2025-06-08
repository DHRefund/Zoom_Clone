'use client';
import { useEffect, useState } from 'react';

const CLockTime = () => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    // Hàm cập nhật giờ và ngày
    const updateTime = () => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit', // Thêm giây
      });
      const currentDate = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
      }).format(now);

      setTime(currentTime);
      setDate(currentDate);
    };

    // Gọi lần đầu
    updateTime();

    // Cập nhật mỗi giây
    const intervalId = setInterval(updateTime, 1000);

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
      <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
    </div>
  );
};
export default CLockTime;
