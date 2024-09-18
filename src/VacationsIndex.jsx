export function VacationsIndex({ vacations }) {
  return (
    <div>
      <h1>All Vacations </h1>
      {vacations.map((vacation) => (
        <div key={vacation.flight}>
          <h2>{vacation.lodging}</h2>
          <img src={vacation.url} />
          <p>Location: {vacation.location}</p>
          <p>Date: {vacation.date}</p>
        </div>
      ))}
    </div>
  );
}
