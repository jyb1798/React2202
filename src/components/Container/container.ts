import React, { useState, useEffect } from "react";
import ReasultBox from "./ReasultBox";

const constainerResult: React.FC = () => {
  const [isReasult, setIsReasult] = useState([]);

  useEffect(() => {
    fetch("./public/data/mockData.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setHotelDetail(res.data.hotelFareList);
      });
  }, []);

  return (
    <>
      {isReasult &&
        isReasult.map((item, index) => {
          return (
            <>
              <ReasultBox key={index} hotelItem={item} />
            </>
          );
        })}
    </>
  );
};

export default constainerResult;
