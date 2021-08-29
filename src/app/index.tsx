import { Container, Stack } from '@chakra-ui/react';
import {useDebounce} from 'use-debounce';
import './index.scss';

import { useAppSelector, useAppDispatch } from "app/hooks";
import { useFetchMediaQuery } from "shared/api/gallery";

import {GalleryFilter, setModalViewSource} from 'features/gallery-mode';
import { MediaList, ModalCard } from 'entities/gallery';

function App() {
  const {view, search, type} = useAppSelector(state => state.galleryConfig);
  const [searchValue] = useDebounce(search, 350);
  const {data = [], isLoading} = useFetchMediaQuery({search: searchValue, type});

  const dispatch = useAppDispatch();
  const handleModalCard = (id: number | null) => {
      dispatch(setModalViewSource(id));
  }

  return (
    <>
      <Container maxW={'1200px'}>
        <Stack spacing={4}> 
          <GalleryFilter />
          {isLoading && <h2>Loading...</h2>}
          <MediaList data={data} view={view} handleCardClick={handleModalCard} />
        </Stack>
      </Container>
      <ModalCard list={data} />
    </>
  );
}

export default App;
