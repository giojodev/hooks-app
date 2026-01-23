  import { useState, useEffect } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColors = keyof typeof colors;

export const useTrafficLight = () => {
  




  const [light, setLight] = useState<TrafficLightColors>("red");
  const [countdown, setCountdown] = useState(5);
  
  useEffect(() => {
    if (countdown === 0) {
      return ;
    }
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  useEffect(() => {
    if(countdown > 0) return;
    setCountdown(5)
    if (countdown === 0) {
      setLight((prev) => {  
        if (prev === "red") {
          return "green";
        } else if (prev === "green") {
          return "yellow";
        } else {
          return "red";
        }
      });
    }
  }, [countdown,light]);
    return {
        countdown,
        light,
        colors,
        percentage : ((5 - countdown) / 5) * 100,
        greenlight: light === "green" ? colors["green"] : "bg-gray-700",
        redlight: light === "red" ? colors["red"] : "bg-gray-700",
        yellowlight: light === "yellow" ? colors["yellow"] : "bg-gray-700",
    }
}
