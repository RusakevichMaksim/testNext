export const Inside = async () => {
  const res = await fetch("http://localhost:3000/api/inside", {
    cache: "no-store",
  }).then((response) => response.json());

  return (
    <div>
      <div>userId:{res?.userId}</div>
      <div>title:{res?.title}</div>
      <div>completed:{`${res?.completed}`}</div>
    </div>
  );
};

export default Inside;
