'use client'
import {useEffect, useState} from "react";

const FlashSaleHeader = () => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  // Calculate the remaining time until the next day calculateRemain
  function calculateRemainingTime() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // Set time to 00:00:00 of the next day

    const timeUntilNextDay = tomorrow.getTime() - now.getTime();
    return timeUntilNextDay;
  }

  // Update remaining time every second
  useEffect(() => {
    const timerID = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(timerID);
    };
  }, []);

  // Format remaining time into hours, minutes, and seconds
  const formatTime = () => {
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60).toString().padStart(2, '0');
    const seconds = Math.floor((remainingTime / 1000) % 60).toString().padStart(2, '0');
    return {  
      hours,
      minutes,
      seconds
    }
  };

  const remainingHours = formatTime().hours
  const remainingMinutes = formatTime().minutes
  const remainingSeconds = formatTime().seconds
  
  return (
    <div className="relative pt-0 md:pt-5 pb-8 md:pb-5">
      <div className="flash-sale-bg">
        <div className="custom-container h-full">
          <div className="flex items-center h-full">
            <div className="font-semibold text-base sm:text-lg">On Sale: </div>
            <div className="pl-2 sm:pl-5 text-base sm:text-lg font-semibold text-red-600">
              Ends in
            </div>
            <div className="ml-2 sm:ml-4 flex items-center gap-x-2 sm:gap-x-[10px]">
              <div className="number-font bg-red-600 text-white font-medium py-2 sm:py-[10px] px-3 sm:px-4 text-base sm:text-lg">
                <p>{remainingHours}</p>
              </div>
              <div className="number-font bg-red-600 text-white font-medium py-2 sm:py-[10px] px-3 sm:px-4 text-base sm:text-lg">
                <p>{remainingMinutes}</p>
              </div>
              <div className="number-font bg-red-600 text-white font-medium py-2 sm:py-[10px] px-3 sm:px-4 text-base sm:text-lg">
                <p>{remainingSeconds}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md">

      </div>
    </div>
  );
};

export default FlashSaleHeader;