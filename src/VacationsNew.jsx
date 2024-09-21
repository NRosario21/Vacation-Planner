export function VacationsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Vacation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Image_url: <input name="image_url" type="text" />
        </div>
        <div>
          Start_time: <input name="start_time" type="date" />
        </div>
        <div>
          End_time: <input name="end_time" type="date" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
