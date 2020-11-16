export default function IndexPage() {
  return (
    <div className="container">
      <div className="topBar">Beirut Food</div>
      <img className="img" src="/img/menu.png" alt="" />{" "}
      <style jsx>{`
        .container {
          margin: 0;
        }
        .topBar {
          background: red;
          color: white;
          padding: 0.5rem;
          font-size: 1.5rem;
        }
        .img {
          width: calc(100vw - 1rem);
        }
      `}</style>
    </div>
  );
}
