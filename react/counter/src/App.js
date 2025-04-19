function CounterApp() {
    const [count, setCount] = React.useState(0);
  
    return (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h2>Számláló alkalmazás</h2>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Növelés</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>Visszaállítás</button>
      </div>
    );
  }
  
  // Globálisan elérhetővé tesszük:
  window.CounterApp = CounterApp;
  