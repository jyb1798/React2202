import React, { useEffect, useState } from "react";

const LastBox = styled.div`
  display: "flex",
  flexDirection: "column",
  margin: "30px 20px",
  width: "335px",
  height: "450px",
  borderRadius: "8px 8px 8px 8px",
  border: "solid 2px #f2f2f2",
  "&:hover": {
    border: "solid 2px #557ffe",
  },
`;

const ContainerOne = styled.div``;

const ContainerTwo = styled.div``;

interface HotelItemProps {
  hotelItem: any;
}
// {Math.floor(salePrice).toLocaleString('ko-KR')}
const ReasultBox: React.FC<HotelItemProps> = (props) => {
  const { hotelItem } = props;

  // const newPrice = Math.floor(hotelItem.discountAmount).toLocaleString("ko-KR");
  // const firstPrice = Math.floor(hotelItem.salePrice).toLocaleString("ko-KR");

  return (
    <LastBox>
      <ContainerOne>글자</ContainerOne>
      <ContainerTwo>이미지</ContainerTwo>
    </LastBox>
  );
};

export default ReasultBox;
