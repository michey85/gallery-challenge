# Gallery Mode Feature

1. Change view of Gallery List.
2. Text search for Gallery list.
3. Type filter for Gallery list.

```typescript
import { useAppSelector } from "app/hooks";
import { useFetchMediaQuery } from "shared/api/gallery";

import {GalleryFilter} from 'features/gallery-mode';
import { MediaList } from 'entities/gallery';

function App() {
  const {view, search, type} = useAppSelector(state => state.galleryConfig);
  const {data = []} = useFetchMediaQuery({search, type});

  return (
    <>
        <GalleryFilter />
        <MediaList data={data} view={view}/>
    </>
  );
}

```