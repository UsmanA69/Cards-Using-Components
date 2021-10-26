import React from "react";
import "./App.css";
import Cardlist from "./Cardlist";
// import

const Card = (props) => {
  const cardlistarray = [
    {
      id: 1,
      name: "Usman",
      quali: "Student",
      wentfrom: "Studies from ABC School",
    },
    {
      id: 2,
      name: "Ali",
      quali: "Student",
      wentfrom: "Studiyng at ABC School",
    },
    {
      id: 3,
      name: "Saad",
      quali: "Student",
      wentfrom: "Studiyng at ABC School",
    },
    {
      id: 4,
      name: "Kashif",
      quali: "Student",
      wentfrom: "Studiyng at ABC School",
    },
    {
      id: 5,
      name: "Imtiaz",
      quali: "University Student",
      wentfrom: "Studied from ABC School",
    },
    {
      id: 6,
      name: "Hassan",
      quali: "Student",
      wentfrom: "Studiyng at ABC School",
    },
    {
      id: 7,
      name: "Atif",
      quali: "College Student",
      wentfrom: "Studied from ABC School",
    },
    {
      id: 8,
      name: "Aleem",
      quali: "Buisness",
      wentfrom: "Studied from ABC School",
    },
    {
      id: 9,
      name: "Kumail",
      quali: "Part time JOB",
      wentfrom: "Studied from ABC School",
    },
    {
      id: 10,
      name: "Khizar",
      quali: "Working",
      wentfrom: "Studied from ABC School",
    },
  ];
  const cpcardlistarray = cardlistarray.map((card, i) => {
    return (
      <Cardlist
        id={cardlistarray[i].id}
        name={cardlistarray[i].name}
        quali={cardlistarray[i].quali}
        wentfrom={cardlistarray[i].wentfrom}
      />
    );
  });

  return (
    <>
      <h1>Cards</h1>
      {cpcardlistarray}
    </>
  );
};

export default Card;
