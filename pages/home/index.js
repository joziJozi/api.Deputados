import Pagina from '@/components/Pagina'
import React from 'react'
import { Card, Carousel, Col, Row} from 'react-bootstrap'
import apiDeputados from '@/services/apiDeputados'

const index = ({deputado}) => {
 
  return (
   <Pagina titulo= ' Camâra dos Deputados'>

    <h1 className='text-center bg-light ' >
    
    </h1>

    <Card>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
                   É importante questionar o quanto a hegemonia do ambiente político não pode mais se dissociar das condições políticas e governamentais exigidas. Ainda assim, existem dúvidas a respeito de como a contínua implementação de obras garante a contribuição de um grupo importante na determinação de todos os recursos públicos envolvidos. Percebemos, cada vez mais, que o início da atividade geral de formação de atitudes maximiza as possibilidades por conta dos níveis de motivação da sociedade. O cuidado em identificar as demandas dos eleitores a crescente influência da mídia desafia a capacidade de equalização das regras de conduta normativas.
        </Card.Text>
      </Card.Body>
    </Card>

   
    
    <Carousel>
      
      
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="https://static.escolakids.uol.com.br/2019/09/arvore.jpg"
          alt="First slide"
        />
      </Carousel.Item>
     
      <Carousel.Item>
        <img
          className="d-block w-30"
          src='https://static.escolakids.uol.com.br/2019/09/arvore.jpg'
          alt="Second slide"
        />    
    </Carousel.Item>
    
    
    </Carousel>

   </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {

 
  const res = await apiDeputados.get('/deputados/')
  const deputado = res.data.dados


  return {
      props: {deputado},
  }
}