/**
 * COMPONENTE: StatCard
 * Propósito: Renderizar una tarjeta de indicadores (KPI) de forma dinámica.
 * * @param {Object} props - Propiedades que recibe el componente.
 * @param {string} label - Pequeño texto superior (Ej: "Legal", "Técnico").
 * @param {string} title - Título central de la tarjeta (Ej: "SOAT").
 * @param {string} value - El dato principal a mostrar (Ej: "48,500 km").
 * @param {string} type  - Clase CSS dinámica para cambiar el color (Ej: "danger", "success").
 */
export default function StatCard({ label, title, value, type }) {
  // Nota para estudiantes: Aquí usamos "Desestructuración" para extraer las variables 
  // directamente de los parámetros, en lugar de usar "props.label", "props.title", etc.

  return (
    /**
     * CLASES DINÁMICAS:
     * Usamos Template Literals (comillas invertidas ``) para combinar una clase fija 
     * 'stat-card' con una variable 'type'. Esto permite que si type='danger', 
     * el div tenga la clase 'stat-card danger', cambiando su estilo en el CSS.
     */
    <div className={`stat-card ${type}`}>
      
      {/* Etiqueta superior: Estilizada con un objeto de JavaScript (Estilo Inline) */}
      <span style={{
        fontSize: '0.75rem', 
        fontWeight: 'bold', 
        color: '#64748b', 
        textTransform: 'uppercase'
      }}>
        {label}
      </span>

      {/* Título de la tarjeta */}
      <h3 style={{ margin: '0.5rem 0', color: '#1e293b' }}>
        {title}
      </h3>

      {/* Valor principal: Se muestra con un tamaño de fuente mayor para resaltar */}
      <p style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>
        {value}
      </p>

    </div>
  );
}