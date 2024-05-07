import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [participants, setParticipants] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date().toLocaleString();
    const participant = { name, email, date };
    setParticipants([...participants, participant]);
    setName('');
    setEmail('');
  };

  const handleCheckIn = (index) => {
    const newParticipants = [...participants];
    newParticipants[index].checkInDate = new Date().toLocaleString();
    setParticipants(newParticipants);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Inscrição</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="submit-button" type="submit">Realizar Inscrição</button>
        </form>
      </div>

      <div>
        <h2>Participantes</h2>
        <table id="participantsTable">
          <thead>
            <tr>
              <th>Participante</th>
              <th>Data de Inscrição</th>
              <th>Data do Check-in</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={index}>
                <td>{participant.name} ({participant.email})</td>
                <td>{participant.date}</td>
                <td>
                  {participant.checkInDate ? participant.checkInDate : (
                    <button onClick={() => handleCheckIn(index)}>Confirmar Check-in</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;