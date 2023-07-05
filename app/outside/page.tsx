export const Outside = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );

  return (
    <div>
      <div>userId:{res?.userId}</div>
      <div>title:{res?.title}</div>
      <div>completed:{`${res?.completed}`}</div>
    </div>
  );
};

export default Outside;
