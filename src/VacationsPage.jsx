import axios from "axios";
import { useState, useEffect } from "react";
import { VacationsIndex } from "./VacationsIndex";

export function VacationsPage() {
  const [vacations, setVacations] = useState([]);
  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/vacations.json").then((response) => {
      console.log(response.data);
      setVacations(response.data);
    });
  };

  useEffect(handleIndex, []);
  return (
    <main>
      <VacationsIndex vacations={vacations} />
    </main>
  );
}
