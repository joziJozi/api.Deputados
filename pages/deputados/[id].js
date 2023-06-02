import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({deputado}) => {
  return (
   <Pagina titulo={deputado.nomeCivil}>
    <Row>
        <Col md={3}>
        <Card.Img variant='top' src={'/deputados/'+ item.id}></Card.Img>
        
        </Col>
        <Col md={9}>
                    <p><strong>Nome: </strong>{item.nome}</p>
                    <p><strong>Partido: </strong>{item.siglaPartido}</p>
                    <p><strong>UF do Partido: </strong>{item.siglaUf}</p>
                    
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


    return {
        props: {deputado},
    }
}

