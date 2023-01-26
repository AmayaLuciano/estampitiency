import { Box, Button, Text, Container, Divider, Heading, SimpleGrid, Link } from "@chakra-ui/react";
import {useContext, useEffect, useState} from "react";

import api from "./api";
import Item from "./components/Item";
import { CartContext } from "./context/CartContext";

import {Product} from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const { quantity, totalPrice } = useContext(CartContext)

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  return (
      
        <Box backgroundColor={'white'} >
          <Heading ml={3} color={'black'} py={4}>Estampitiency</Heading>
          <Divider borderColor={'gray.400'}/>
          <SimpleGrid columns={{sm:1, md:2, lg: 3}} spacing={3} p={3}>
            {products.map((product) => (
              <Item key={product.id} {...product}/>
            ))}
          </SimpleGrid>
          <Container position={'sticky'} bottom={0} paddingBottom={4} textAlign={'center'}>
            <Button  h={'45px'} width={'220px'} backgroundColor={'messenger.400'} colorScheme={'messenger'}  cursor={'default'} color={'white'}>{quantity} productos (total: ${totalPrice})</Button>
          </Container>
          <Divider borderColor={'gray.400'}/>
          <Text color={'blackAlpha.700'} textAlign={'center'} py={3}>
            Si te interesó podes entrar a mi Linkedin{" "}
            <Link color={'black'} textDecoration={'underline'} href="https://www.linkedin.com/in/luciano-amaya-972504218/" isExternal>acá</Link>
          </Text>
        </Box>
  );
}

export default App;
