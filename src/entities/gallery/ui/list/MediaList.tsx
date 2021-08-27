import type {FC} from 'react';
import { UnorderedList, ListItem, SimpleGrid, Container } from "@chakra-ui/react";

import { Card } from "../card/Card";
import type {MediaCard, MediaViewType} from '../../model';

interface MediaListProps {
    data: MediaCard[];
    view?: MediaViewType;
    handleCardClick?: React.MouseEventHandler<HTMLElement>;
}

const MediaList: FC<MediaListProps> = (props) => {
    const {data, view = 'table', handleCardClick} = props;
    
    // const {view} = useAppSelector(state => state.galleryConfig);
    // const {data = [], isLoading, isError, error} = useFetchMediaQuery();

    return view === 'table' ? (
        <SimpleGrid columns={[2, 4, 8]}>
            {data.map((item) => (
                <Card key={item.id} onClick={handleCardClick} {...item} />
            ))}
        </SimpleGrid>
    ) : (
        <Container>
            <UnorderedList>
                {data.map(item => (
                    <ListItem key={item.id} onClick={handleCardClick}>
                        {item.name}
                    </ListItem>
                ))}
            </UnorderedList>
        </Container>
    )
}

export {MediaList};
