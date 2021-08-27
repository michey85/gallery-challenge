import './index.scss';
import {View} from 'features/gallery-config';
import { Upload } from 'features/gallery-api';
import { MediaList } from 'features/gallery-api/MediaList';
import { Container, Stack } from '@chakra-ui/react';

function App() {
  return (
    <Container maxW={'920px'}>
      <Stack spacing={4}>
        <View />
        <MediaList />
      </Stack>

      <Upload />
    </Container>
  );
}

export default App;
