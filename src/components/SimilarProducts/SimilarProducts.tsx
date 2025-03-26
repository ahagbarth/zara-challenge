import React from 'react'
import Card from '../Card'
import Label from '../Label'
import { Container, ListContainer } from './styles'
import { TSimilarProduct } from '@/features/ProductGrid/types'

const SimilarProducts: React.FC<{similarProducts: TSimilarProduct}> = ({similarProducts}) => {
  return (
    <Container>
        <Label text="Similar Items" isUpperCase variant="header" />
        <ListContainer>
        {similarProducts?.map((product) => (<Card key={product.id}  {...product} />))}

        </ListContainer>
    </Container>
  )
}

export default SimilarProducts