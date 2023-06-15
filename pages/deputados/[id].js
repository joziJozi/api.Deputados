import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import React from 'react'
import { RiFileExcel2Line } from 'react-icons/ri';
import { Accordion, Button, Card, Col, Container, Row, Table } from 'react-bootstrap'

const Detalhes = ({ deputado, despesas }) => {

  const exportarParaExcel = async () => {
    const despesasData = despesas.map((item) => [
      item.dataDocumento,
      item.tipoDespesa,
      `R$${item.valorDocumento}`,
    ]);

  }
  return (


    <Pagina titulo={deputado.nomeCivil}>
      <Row>

        <Col md={3}>
          <Card border="success" style={{ width: '16rem' }}>
            <Card.Header className=' bg-success'></Card.Header>
            <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />


          </Card>
        </Col>

        <Col md={9}> 
          <Card border="success" style={{ width: '50rem' }}>
          <Card.Header className=' bg-success'></Card.Header>
          <Container>
            <p><strong>Nome: {deputado.nomeCivil}</strong></p>
            <p><strong>CPF: {deputado.cpf}</strong></p>
            <p><strong>Data de Nascimento: {deputado.dataNascimento}</strong></p>
            <p><strong>Naturalidade: {deputado.municipioNascimento} - {deputado.ufNascimento}</strong></p>
            <p><strong>Escolaridade: {deputado.escolaridade}</strong></p>
            <p><strong>Partido: {deputado.ultimoStatus.siglaPartido}</strong></p>
            <p><strong>Condição Eleitoral: {deputado.ultimoStatus.condicaoEleitoral}</strong></p>
            <p><strong>Situação: {deputado.ultimoStatus.situacao}</strong></p>
            </Container>
          </Card>
        </Col>
      </Row>

      <Row md={2}>
        <Accordion eventKey="0" className='pt-5 '>
          <Accordion.Item eventKey="0" >
            <Accordion.Header>Gabinete</Accordion.Header>
            <Accordion.Body>
              <p><strong>Nome: {deputado.ultimoStatus.gabinete.nome}</strong></p>
              <p><strong>Predio: {deputado.ultimoStatus.gabinete.predio}</strong></p>
              <p><strong>Sala: {deputado.ultimoStatus.gabinete.sala}</strong></p>
              <p><strong>Andar: {deputado.ultimoStatus.gabinete.andar}</strong></p>
              <p><strong>Telefone: {deputado.ultimoStatus.gabinete.telefone}</strong></p>
              <p><strong>Email: {deputado.ultimoStatus.gabinete.email}</strong></p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>

      <Row md={2}>
      </Row>

      <Row>
        <Col md={12} className='pt-5 pb-10'>
          <Card>
            <Card.Header className='text-center'>Despesas</Card.Header>
            <Card.Body>
              <Table striped>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {despesas.map(item => (
                    <tr key={item.id}>
                      <td>{item.dataDocumento}</td>
                      <td>{item.tipoDespesa}</td>
                      <td> R${item.valorDocumento}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className='d-flex justify-content-center'>
                <Button
                  variant="outline-primary"
                  className='d-flex align-items-center'
                  onClick={exportarParaExcel}
                >
                  <RiFileExcel2Line className="me-2" />
                  Exportar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </Pagina>
  )
}

export default Detalhes

export async function getServerSideProps(context) {

  const id = context.params.id

  const res = await apiDeputados.get('/deputados/' + id)
  const deputado = res.data.dados

  const resultadodespesa = await apiDeputados.get('/deputados/' + id + '/despesas')
  const despesas = resultadodespesa.data.dados

  return {
    props: { deputado, despesas },
  }
}

