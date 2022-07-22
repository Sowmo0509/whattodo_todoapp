import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState();
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <p className="m-auto py-3 text-xs text-gray-400 tracking-wide">{time}</p>;
};

export default CurrentTime;
