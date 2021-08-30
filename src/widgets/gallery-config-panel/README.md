# Gallery Config Panel Widget

1. Change view of Gallery list.
2. Text search for Gallery list.
3. Type filter for Gallery list.

```typescript
import { useAppSelector, useAppDispatch } from "app/hooks";
import { useFetchMediaQuery } from "shared/api/gallery";

import {GalleryConfigPanel} from 'widgets/gallery-config-panel'
import { MediaList } from 'entities/gallery';

function App() {
  const {search, type} = useAppSelector(state => state.galleryFilter);
  const {view} = useAppSelector(state => state.galleryView);
  const {data = [], isLoading} = useFetchMediaQuery({search, type});

  return (
    <>
        <GalleryConfigPanel />
        <MediaList data={data} view={view}/>
    </>
  );
}

```