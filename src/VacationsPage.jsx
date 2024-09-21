import axios from "axios";
import { useState, useEffect } from "react";
import { VacationsIndex } from "./VacationsIndex";
import { VacationsNew } from "./VacationsNew";

export function VacationsPage() {
  const [vacations, setVacations] = useState([]);
  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/vacations.json").then((response) => {
      console.log(response.data);
      setVacations(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/vacations.json", params).then((response) => {
      setVacations([...vacations, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);
  return (
    <main>
      <VacationsNew onCreate={handleCreate} />
      <VacationsIndex vacations={vacations} />
    </main>
  );
}
