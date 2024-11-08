import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Login() {
  return (
    <div className="bg-dark min-vh-100 d-flex align-items-center justify-content-center text-white">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="shadow-lg p-4">
              <Card.Body>
                <h2 className="text-center mb-4">Iniciar Sesión</h2>

                {/* Formulario de inicio de sesión */}
                <Form>
                  {/* Campo de correo electrónico */}
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingresa tu correo"
                      required
                    />
                  </Form.Group>

                  {/* Campo de contraseña */}
                  <Form.Group controlId="password" className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      required
                    />
                  </Form.Group>

                  {/* Botón de inicio de sesión */}
                  <Button variant="primary" type="submit" className="w-100 mb-3">
                    INICIAR SESIÓN
                  </Button>

                  {/* Enlace para recuperar la contraseña */}
                  <div className="text-center mb-3">
                    <a href="#" className="text-light">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>

                  {/* Enlace para crear una cuenta */}
                  <div className="text-center">
                    <p className="m-0">
                      ¿No tienes una cuenta?{' '}
                      <a href="#" className="text-primary">
                        Crea una
                      </a>
                    </p>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
