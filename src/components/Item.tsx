import { Button, Box, Flex, Text, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Product } from '../types';

const Item = (product: Product) => {
  const { increaseCartQuantity, cart, decreaseCartQuantity } =
    useContext(CartContext);

  const cartQuantity =
    cart.find((item) => item.product.id === product.id)?.quantity ?? 0;
  return (
    <Flex
      flexDir={'column'}
      justifyContent={'space-between'}
      backgroundColor={'white'}
      color="gray.700"
      height={'full'}
    >
      <Box>
        <img src={product.image} />
        <Heading color={'black'} fontSize={'xl'} mt={4}>
          {product.title}
        </Heading>
        <Text color={'gray'}>{product.description}</Text>
      </Box>

      {cartQuantity ? (
        <Flex justify={'space-between'} align={'center'}>
          <Button
            h={'45px'}
            w={'50px'}
            mt={4}
            ml={'120px'}
            backgroundColor={'messenger.400'}
            colorScheme={'messenger'}
            color={'white'}
            onClick={() => decreaseCartQuantity(product)}
          >
            -
          </Button>
          <Text fontSize={'large'} mx={4} mt={3}>
            {cartQuantity}
          </Text>
          <Button
            colorScheme={'messenger'}
            h={'45px'}
            w={'50px'}
            mt={4}
            mr={'120px'}
            backgroundColor={'messenger.400'}
            color={'white'}
            onClick={() => increaseCartQuantity(product)}
          >
            +
          </Button>
        </Flex>
      ) : (
        <Button
          colorScheme={'messenger'}
          h={'45px'}
          mt={4}
          backgroundColor={'messenger.400'}
          color={'white'}
          onClick={() => increaseCartQuantity(product)}
        >
          Agregar
        </Button>
      )}
    </Flex>
  );
};

export default Item;
