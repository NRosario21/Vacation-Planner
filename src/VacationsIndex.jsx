export function VacationsIndex({ vacations }) {
  return (
    <div>
      <h1>All Vacations </h1>
      {vacations.map((vacation) => (
        <div key={vacation.id}>
          <h2>{vacation.lodging}</h2>
          <img src={vacation.image_url} />
          <p>Location: {vacation.location}</p>
          <p>Flight: {vacation.flight}</p>
          <p>Cost: {vacation.cost}</p>
          <p>Start_time: {vacation.start_time}</p>
          <p>End_time: {vacation.end_time}</p>
        </div>
      ))}
    </div>
  );
}
