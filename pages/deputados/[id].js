import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({deputados}) => {
  return (
   <Pagina titulo={deputados.nome}>
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

    const res = await apiDeputados.get('/deputados' + id)
    const deputados = res.data.dados
    
    const resNome = await apiDeputados.get('/deputados' + id) 
    const nome = resNome.data.cast

    const ressiglaPartido = await apiDeputados.get('/deputados' + id)
    const siglaPartido = ressiglaPartido.data.cast

    const ressiglaUf = await apiDeputados.get('/deputados' + id)
    const siglaUf = ressiglaUf.data.cast

    return {
        props: {deputados, urlFotos, siglaPartido, siglaUf, nome},
    }
}

