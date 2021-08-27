import { useState } from 'react';
import './index.scss';

import { useAppSelector } from "app/hooks";
import { useFetchMediaQuery } from "shared/api/gallery";

import {GalleryFilter} from 'features/gallery-mode';
import { Upload } from 'features/gallery-upload-media';
import { MediaList, MediaSource } from 'entities/gallery';
import { Container, Stack } from '@chakra-ui/react';

function App() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState<MediaSource | ''>('');
  
  const {view} = useAppSelector(state => state.galleryConfig);
  const {data = [], isLoading} = useFetchMediaQuery({search, type});

  return (
    <Container maxW={'1200px'}>
      <Stack spacing={4}> 
        <GalleryFilter
          search={search}
          handleSearch={setSearch}
          type={type}
          handleType={setType}
        />
        {isLoading && <h2>Loading...</h2>}
        <MediaList data={data} view={view}/>
      </Stack>

      <Upload />
    </Container>
  );
}

export default App;
