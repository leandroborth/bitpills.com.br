function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "95vh",
        fontFamily: "Helvetica, sans-serif",
        paddingLeft: "25px",
        paddingRight: "25px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        BitPills
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#555",
        }}
      >
        Estamos construindo um novo local na internet!
        <br />
        <br />
        Um ponto de encontro pra quem se interessa por Bitcoin, Economia e
        Tecnologia.
        <br />
        Um espaço destinado a debates e troca de conhecimentos por meio de
        publicações e comentários criados pelos próprios usuários.
      </p>
    </main>
  );
}

export default Home;
