import React from "react";

function getClient() {
  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];
  if (subdomain === "hhm") return "hhm";
  if (subdomain === "stepstone") return "stepstone";
  if (subdomain === "HeQ") return "HeQ";
  return "default";
}

function App() {
  const client = getClient();

  return (
    <div className="App" style={{ textAlign: "center", marginTop: 50 }}>
      <header className="App-header">
        <h1>Welcome to {client.toUpperCase()} Portal</h1>
        <p>
          This content is dynamically rendered based on the subdomain.
        </p>
        {client === "hhm" && <p>HHM specific content goes here!</p>}
        {client === "stepstone" && <p>Stepstone specific content goes here!</p>}
        {client === "HeQ" && <p>HeQ ungalai anbubudan vara vaikurathu specific content goes here!</p>}
        {client === "default" && <p>This is the default content for other domains.</p>}
      </header>
    </div>
  );
}

export default App;
