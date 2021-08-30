# Gallery View Selector feature

Changes gallery's view between:
* list
* thumbnails

```typescript
import { useAppSelector } from "shared/hooks";
import { useFetchMediaQuery } from "shared/api/gallery";

import {GalleryViewSelect} from 'features/gallery-view-select';

function App() {
    const {view} = useAppSelector(state => state.galleryView);
    const {data = []} = useFetchMediaQuery();
    
    return (
        <>
            <GalleryViewSelect />
            <MediaList data={data} view={view} />
        </>
    )
}
```
