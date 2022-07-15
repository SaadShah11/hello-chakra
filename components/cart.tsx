import { Heading, AspectRatio, Button, Divider, Text, Stack, Image, VStack, HStack, useColorMode, useColorModeValue} from '@chakra-ui/react'

const Cart = () => {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
    const useSecondaryColor = useColorModeValue("gray.600","gray.400")

    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg={bgColor}>
            <VStack spacing={3} alignItems="flex-start">
                <Heading size="2xl">Your Cart</Heading>
                <Text>If the price is too hard on your eyes,{' '} 
                <Button variant="link" onClick={toggleColorMode}>try changing the theme</Button></Text>
            </VStack>
            <HStack
                spacing={{ base: 3, md: 6 }}
                alignItems={{ base: 'flex-start', md: 'center' }}
                w="full"
            >
                <AspectRatio ratio={1} w={24}>
                    <Image boxSize='70px' objectFit='cover' src='/skate.jpg' alt='skateboard' />
                </AspectRatio>
                <Stack
                    spacing={0}
                    w="full"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <VStack w="full" spacing={0} alignItems="flex-start">
                        <Heading size="md">Penny Board</Heading>
                        <Text color={useSecondaryColor}>ABXFSHATCNS23D</Text>
                    </VStack>
                    <Heading size="sm" textAlign="end">
                        $119.00
                    </Heading>
                </Stack>
            </HStack>
            <VStack spacing={4} alignItems="stretch" w="full">
                <HStack justifyContent="space-between">
                    <Text color={useSecondaryColor}>Subtotal</Text>
                    <Heading size="sm">$119.00</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text color={useSecondaryColor}>Shipping</Text>
                    <Heading size="sm">$19.99</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text color={useSecondaryColor}>Taxes (estimated)</Text>
                    <Heading size="sm">$23.80</Heading>
                </HStack>
            </VStack>
            <Divider />
            <HStack justifyContent="space-between" w="full">
                <Text color={useSecondaryColor}>Total</Text>
                <Heading size="lg">$162.79</Heading>
            </HStack>
        </VStack>
    );
};

export default Cart;