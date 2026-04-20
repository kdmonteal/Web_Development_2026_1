import React, { useState } from 'react';
// Importación de sub-componentes (Modularización)
import StatCard from './components/StatCard';
import MaintenanceModal from './components/MaintenanceModal';
import './App.css';

function App() {
  /**
   * 1. HOOKS DE ESTADO (States)
   * En React, si una variable cambia y queremos que la UI se actualice, usamos useState.
   */
  
  // Controla si el modal es visible o no (Boolean)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Almacena el arreglo de objetos con los registros del vehículo.
  // Iniciamos con "Mock Data" (datos de prueba).
  const [mantenimientos, setMantenimientos] = useState([
    { id: 1, fecha: '2026-03-10', descripcion: 'Cambio de Aceite 10W-30', km: 45000 },
    { id: 2, fecha: '2026-01-15', descripcion: 'Revisión de Frenos', km: 42000 },
  ]);

  /**
   * 2. LÓGICA DE NEGOCIO (Handlers)
   */

  // Función que recibe el nuevo registro desde el componente hijo (MaintenanceModal)
  const handleSave = (registro) => {
    /**
     * IMPORTANTE: Inmutabilidad.
     * En React no usamos .push(). Creamos un nuevo arreglo [...] 
     * donde el primer elemento es el nuevo registro y luego volcamos el resto.
     */
    setMantenimientos([registro, ...mantenimientos]);
    
    // Cerramos el modal tras actualizar el estado
    setIsModalOpen(false);
  };

  return (
    <div className="app-viewport">
      {/* HEADER / NAVBAR */}
      <nav className="navbar">
        <h1 style={{margin: 0, fontSize: '1.5rem'}}>AutoManager <span style={{color: '#3b82f6'}}>PRO</span></h1>
        <div style={{opacity: 0.8, fontSize: '0.9rem'}}>Panel de Control Vehicular</div>
      </nav>

      <main className="main-content">
        {/* ENCABEZADO DE SECCIÓN */}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
          <h2 style={{margin: 0, color: '#1e293b'}}>Resumen General</h2>
          {/* Al hacer clic cambiamos el estado isModalOpen a true para mostrar el componente modal */}
          <button onClick={() => setIsModalOpen(true)} className="btn-save" style={{padding: '0.8rem 1.5rem'}}>
            + Añadir Registro
          </button>
        </div>

        {/* INDICADORES CLAVE (Cards)
            Aquí pasamos información mediante "PROPS" (label, title, value, type)
        */}
        <section className="stats-grid">
          <StatCard label="Legal" title="SOAT" value="Vence: 24/Abr/2026" type="danger" />
          <StatCard label="Finanzas" title="Impuestos" value="Estado: Al día" type="info" />
          <StatCard label="Técnico" title="Kilometraje" value="48,500 km" type="success" />
        </section>

        {/* LISTADO DE DATOS (Tabla) */}
        <section style={{background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead style={{background: '#f8fafc', borderBottom: '2px solid #e2e8f0'}}>
              <tr>
                <th style={{padding: '1.2rem', textAlign: 'left', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase'}}>Fecha</th>
                <th style={{padding: '1.2rem', textAlign: 'left', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase'}}>Descripción del Servicio</th>
                <th style={{padding: '1.2rem', textAlign: 'right', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase'}}>Kilometraje</th>
              </tr>
            </thead>
            <tbody>
              {/* RENDERIZADO DINÁMICO
                  Usamos .map() para transformar el arreglo de objetos en filas (JSX).
                  Es obligatorio asignar un "key" único a cada fila.
              */}
              {mantenimientos.map(m => (
                <tr key={m.id} style={{borderBottom: '1px solid #f1f5f9'}}>
                  <td style={{padding: '1.2rem', color: '#475569'}}>{m.fecha}</td>
                  <td style={{padding: '1.2rem', fontWeight: 'bold', color: '#1e293b'}}>{m.descripcion}</td>
                  <td style={{padding: '1.2rem', textAlign: 'right', fontMedium: true, color: '#2563eb'}}>
                    {Number(m.km).toLocaleString()} km
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      {/* COMPONENTE MODAL
          - isOpen: Prop que indica visibilidad.
          - onClose: Función para cerrar el modal desde dentro.
          - onSave: Callback que envía los datos del formulario de vuelta al padre.
      */}
      <MaintenanceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSave} 
      />
    </div>
  );
}

export default App;