import React, { useState } from 'react';

/**
 * COMPONENTE: MaintenanceModal
 * Maneja el formulario emergente para capturar nuevos datos.
 * * @param {boolean} isOpen - Determina si el modal se renderiza o no.
 * @param {function} onClose - Función para cerrar el modal sin guardar.
 * @param {function} onSave - Función callback para enviar el nuevo objeto al padre.
 */
export default function MaintenanceModal({ isOpen, onClose, onSave }) {
  
  // ESTADO LOCAL: Maneja temporalmente los datos que el usuario escribe en los inputs.
  // Usamos un objeto inicial con strings vacíos.
  const [nuevo, setNuevo] = useState({ fecha: '', descripcion: '', km: '' });

  // RENDERIZADO CONDICIONAL: Si isOpen es false, el componente no devuelve nada (null).
  if (!isOpen) return null;

  /**
   * MANEJADOR DEL ENVÍO (Submit)
   * Se ejecuta cuando el usuario presiona el botón "Guardar Registro".
   */
  const handleSubmit = (e) => {
    // Evita que la página se recargue (comportamiento por defecto de los formularios).
    e.preventDefault();
    
    // Ejecutamos la función que vino por Props, pasando los datos del estado local.
    // Generamos un ID único basado en el timestamp actual.
    onSave({ ...nuevo, id: Date.now() });
    
    // LIMPIEZA: Reseteamos el formulario para que esté vacío la próxima vez que se abra.
    setNuevo({ fecha: '', descripcion: '', km: '' });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        
        {/* ENCABEZADO DEL MODAL */}
        <div className="modal-header">
          <h3 style={{margin: 0}}>Nueva Revisión</h3>
          {/* Botón de cierre: Llama a la función onClose definida en App.jsx */}
          <button onClick={onClose} style={{background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.5rem'}}>×</button>
        </div>

        {/* FORMULARIO: Aquí aplicamos el concepto de "Componentes Controlados" */}
        <form onSubmit={handleSubmit} className="modal-form">
          
          {/* INPUT DE FECHA */}
          <input 
            type="date" 
            required 
            value={nuevo.fecha} 
            // Sincronizamos el input con el estado usando el operador spread (...)
            onChange={e => setNuevo({...nuevo, fecha: e.target.value})} 
          />

          {/* INPUT DE DESCRIPCIÓN */}
          <input 
            type="text" 
            placeholder="Descripción (Ej: Cambio Aceite)" 
            required 
            value={nuevo.descripcion} 
            onChange={e => setNuevo({...nuevo, descripcion: e.target.value})} 
          />

          {/* INPUT DE KILOMETRAJE */}
          <input 
            type="number" 
            placeholder="Kilometraje" 
            required 
            value={nuevo.km} 
            onChange={e => setNuevo({...nuevo, km: e.target.value})} 
          />

          <button type="submit" className="btn-save">Guardar Registro</button>
        </form>
      </div>
    </div>
  );
}