import React from 'react';

function TestComponent() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1>¡La aplicación React está funcionando correctamente!</h1>
      <p>Si puedes ver este mensaje, significa que la configuración básica de React está funcionando.</p>
      <p>Ahora puedes proceder a implementar tus ejercicios.</p>
      <a href="/" style={{ marginTop: '20px', color: 'blue' }}>Volver al menú</a>
    </div>
  );
}

export default TestComponent;
