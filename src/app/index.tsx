import { Container, Stack } from '@chakra-ui/react';
import {useDebounce} from 'use-debounce';

import { useAppSelector, useAppDispatch } from "shared/hooks";
import { useFetchMediaQuery } from "shared/api/gallery";

import {GalleryConfigPanel} from 'widgets/gallery-config-panel'
import { MediaList, ModalCard, setModalViewSource } from 'entities/gallery';

function App() {
  const {search, type} = useAppSelector(state => state.galleryFilter);
  const {view} = useAppSelector(state => state.galleryView);
  const [searchValue] = useDebounce(search, 350);
  const {data = []} = useFetchMediaQuery({search: searchValue, type});

  const dispatch = useAppDispatch();
  const handleModalCard = (id: number | null) => {
      dispatch(setModalViewSource(id));
  }

  return (
    <>
      <Container maxW={'1200px'}>
        <Stack spacing={4}> 
          <GalleryConfigPanel />
          <MediaList data={data} view={view} handleCardClick={handleModalCard} />
        </Stack>
      </Container>
      <ModalCard list={data} />
    </>
  );
}

export default App;
