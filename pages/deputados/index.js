import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'


const index = (props) => {
    return (
        <Pagina titulo= 'Deputados'>
           <Row md={4}>
    
               {props.deputados.map(item => (
                  <Col>
                      <Card>
                         <Card.Img variant="top" src={item.urlFoto}></Card.Img>
                         <Card.Body>
                               <Card.Title>{item.nome}</Card.Title>
                               <Link className='btn btn-danger' href={'/deputados/' + item.id}>Detalhes</Link>
                         </Card.Body>
                     </Card>
                   </Col>
    
                ))}
            </Row>
  
        </Pagina>
     )
}

export default index

export async function getServerSideProps(context){

  const resultado = await apiDeputados.get ('/deputados/')
  const deputados = resultado.data.dados

  return{
    props: { deputados },
  }
}