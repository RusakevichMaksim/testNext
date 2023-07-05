export default function Home() {
  return (
    <main className="">
      <div
        style={{
          display: "flex",
          color: "black",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="/inside"
          style={{
            padding: "10px",
            backgroundColor: "yellow",
            margin: "5px",
          }}
        >
          inside
        </a>
        <a
          href="/outside"
          style={{
            padding: "10px",
            backgroundColor: "orange",
            margin: "5px",
          }}
        >
          outside
        </a>
      </div>
    </main>
  );
}
