import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const isAuthenticated = localStorage.getItem('authenticated');  // Verifica si el usuario está autenticado

  if (!isAuthenticated) {
    return <Redirect to="/login" />; // Si no está autenticado, redirige al login
  }

  // Datos del gráfico de barras sobre los gastos mensuales
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Gastos Mensuales (en $)',
        data: [1200, 1500, 1800, 1300, 1700, 2000], // Datos de gastos mensuales
        backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Color de las barras
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde de las barras
        borderWidth: 1,
      },
    ],
  };

  // Opciones de la gráfica
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Gastos Mensuales',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Container fluid className="mt-4">
      <h2 className="text-center">Dashboard de Gastos</h2>
      <Row className="mt-4">
        {/* Columna para la gráfica */}
        <Col md={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Distribución de Gastos Mensuales</Card.Title>
              <Bar data={data} options={options} />
            </Card.Body>
          </Card>
        </Col>

        {/* Columna para estadísticas adicionales */}
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Categorías de Gastos</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Comida: $500</ListGroup.Item>
                <ListGroup.Item>Transporte: $300</ListGroup.Item>
                <ListGroup.Item>Entretenimiento: $200</ListGroup.Item>
                <ListGroup.Item>Salud: $100</ListGroup.Item>
                <ListGroup.Item>Vivienda: $800</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Resumen Anual</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Total Gastado en 2024: $10,000</ListGroup.Item>
                <ListGroup.Item>Ahorros: $1,500</ListGroup.Item>
                <ListGroup.Item>Deudas: $2,000</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Card adicional para más información */}
        <Col md={12}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Más Información</Card.Title>
              <p>Si deseas más detalles, puedes ir a la sección de estadísticas completas o reportes detallados de tus finanzas.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
