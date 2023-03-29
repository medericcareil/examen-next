import { CanIDeployProps } from "@/types/canIDeployProps";
import formatDate from "@/utils/date";
import { Spinner, Box, Center, Text } from "@chakra-ui/react";
import useSWR from 'swr';

export default function CanIDeployComponent({date}: CanIDeployProps) {
    const fetcher = (...args : Parameters<typeof fetch>) => fetch(...args).then(res => res.json());
    const { data, error, isLoading } = useSWR('/api/icandeploy?date=' + date, fetcher, {revalidateOnFocus: true});
    
    if (error) return (
    <Box bg='red.400' color='white' padding={3} mt={3}>
        Une erreur est survenue lors de la récuperation des informations
    </Box>
    )
    if (isLoading) return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />;

    return (
        <>
            <Center>
                <Box mt={4}>        
                    <Text mb={4}>Date : {formatDate(data.date)}</Text>
                    {!data.validated ? <Text bg='red.400' color='white' padding={4} mt={3}>Vous ne pouvez pas déployer ce jour la !</Text> : <Text bg='green.400' color='white' padding={4} mt={3}>Vous pouvez déployer ce jour la :)</Text>}
                </Box>
            </Center>
        </>
    );
}
