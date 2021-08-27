import { Box, UnorderedList, ListItem, SimpleGrid, Container } from "@chakra-ui/react";
import { useAppSelector } from "app/hooks";
import { useFetchMediaQuery } from "./api";
import { MediaCard } from "./MediaCard";

const MediaList = () => {
    const {view} = useAppSelector(state => state.galleryConfig);
    const {data = [], isLoading, isError, error} = useFetchMediaQuery();

    if (isError) {
        return (
            <Box>
                {error.message}
            </Box>
        )
    }

    if (isLoading) {
        return (
            <Box>
                Loading...
            </Box>
        );
    }

    return view === 'table' ? (
        <SimpleGrid columns={[2, 4, 8]}>
            {data.map((item) => (
                <MediaCard key={item.id} {...item} />
            ))}
        </SimpleGrid>
    ) : (
        <Container>
            <UnorderedList>
                {data.map(item => (
                    <ListItem key={item.id}>
                        {item.name}
                    </ListItem>
                ))}
            </UnorderedList>
        </Container>
    )
}

export {MediaList};
