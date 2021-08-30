import type { FC } from 'react';
import {
  Box,
  UnorderedList,
  SimpleGrid,
  Container,
  Heading,
} from '@chakra-ui/react';

import { Card } from '../card/Card';
import { MediaListItem } from '../list-item/MediaListItem';
import type { MediaCard, MediaViewType } from '../../model';

interface MediaListProps {
  data: MediaCard[];
  view?: MediaViewType;
  handleCardClick?: (id: number | null) => void;
}

const MediaList: FC<MediaListProps> = (props) => {
  const { data, view = 'table', handleCardClick } = props;

  if (!data.length) {
    return <Box>Media Cards not found.</Box>;
  }

  return view === 'table' ? (
    <SimpleGrid columns={[2, 4, 8]}>
      {data.map((item) => (
        <Card key={item.id} onClick={handleCardClick} {...item} />
      ))}
    </SimpleGrid>
  ) : (
    <Container>
      <Heading>Well, yeah, it looks ugly. But it works =)</Heading>
      <UnorderedList>
        {data.map((item) => (
            <MediaListItem key={item.id} onClick={handleCardClick} {...item}/>
        ))}
      </UnorderedList>
    </Container>
  );
};

export { MediaList };
