import type { NextPage } from 'next'
import { Container, Flex, VStack } from '@chakra-ui/react'
import Cart from "../components/cart"
import Details from '../components/details'

// RESPONSIVE
// First way
// for responsiveness in chakra we use arrays i.e. 
//in py={[0, 10, 20]} the paddings used are 0 until 
//479px, 10 from 480 to 767, 20 from 468 and up 

// Second Way
//We can also use objects sfor responsiveness i.e.
// in {{ base: 'column-reverse', md: 'row' }} the base 
// is from 0 to 767 and md is from 768 and above

// Third Way
// We can use useBreakpointValue hook, i.e. const colSpan = useBreakpointValue({ base: 2, md: 1 })
// in this example if we set colSpan of GridItem to 
// colSpan={colSpan} it will span 2 columns for base case
// and 1 column for md case, we use this syntax if we want to 
// make variants or size props responsive
const Home: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex 
        h={{ base: 'auto', md: '100vh' }} 
        py={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}  
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}

export default Home
