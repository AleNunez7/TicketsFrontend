import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const getTickets = async () => {
      const response = await axios({
        method: "get",
        url: "http://localhost:8002/tickets",
      });
      setTickets(response.data);
      console.log(response.data);
    };
    getTickets();
  }, []);
  return (
    <>
      <div className="firstContainer container mt-5">
        <div>
          <i className="fas fa-chevron-left me-2" style={{ cursor: "pointer" }}></i>
          <span>Volver</span>
        </div>
      </div>
      <div className="secondContainer rounded container mt-3">
        <div className="fw-bold text-start">
          <h2 className="mb-4 ms-2 fw-bold">Tickets</h2>
        </div>
        <hr />
        {tickets.map((ticket) => {
          return (
            <>
              <div className="mt-3 d-flex justify-content-between">
                <p className="fw-light fontSize">De: {ticket.from}</p>
                <p className="fw-light fontSize">Enviado: {ticket.date}</p>
              </div>
              <div>
                {ticket.status === "NEW" ? (
                  <span className="badge bg-danger me-2">{ticket.status}</span>
                ) : (
                  <span className="badge bg-primary me-2">{ticket.status}</span>
                )}
                <span className="fw-bold">{ticket.subject}</span>
                <div className="d-flex justify-content-end">
                  <i
                    className=" arrowRight fas fa-chevron-right fs-4 "
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <img className="img-fluid mt-5" src="/img/tiendamia.png" alt="Tienda Mía" width="200rem" />
      </div>
    </>
  );
}

export default App;
