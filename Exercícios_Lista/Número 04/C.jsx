import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function PrevisaoTempo({ temperatura, clima, cidade, umidade }) {
  const getIcon = (clima) => {
    const climas = {
      'ensolarado': '☀️',
      'nublado': '🌥️',
      'chuvoso': '🌧️',
      'tempestuoso': '⛈️',
      'nevando': '❄️'
    };
    return climas[clima.toLowerCase()] || '🌈';
  };


  const getCorTemperatura = (temp) => {
    if (temp < 15) return '#4a90e2'
    if (temp < 25) return '#f5a623'
    return '#d0021b'
  };
  return (
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '15px',
      padding: '25px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #0984e3)',
      color: 'white',
      maxWidth: '200px',
      minWidth: '200px'
    }}>
      <h2 style={{ margin: '0 0 15px 0' }}>{cidade}</h2>
      <div style={{ fontSize: '60px', margin: '10px 0' }}>{getIcon(clima)}</div>
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: getCorTemperatura(temperatura),
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        {temperatura}°C
      </div>
      <p style={{ fontSize: '18px', margin: '10px 0' }}>{clima}</p>
      <p style={{ fontSize: '14px', opacity: 0.9 }}>Umidade: {umidade}%</p>
    </div>
  );
}
function App() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    allignItens: 'center',
    gap: '20px',
    marginTop: '50px',
    flexWrap: 'wrap',
    with: '100%',
  };
  return (
    <div style={containerStyle}>
      <PrevisaoTempo temperatura={31} clima="ensolarado" cidade='Rio de Janeiro' umidade={30} />
      <PrevisaoTempo temperatura={14} clima="tempestuoso" cidade='Manaus' umidade={70} />
      <PrevisaoTempo temperatura={-1} clima="nevando" cidade='Rio Grande so Sul' umidade={50} />
      <PrevisaoTempo temperatura={17} clima="Arco" cidade='Curitiba' umidade={100} />
    </div>
  );
}
export default App;
