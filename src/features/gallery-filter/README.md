# Gallery filter feature

1. Filter media by name
2. Filter media by type

```typescript
import { useAppSelector } from "shared/hooks";
import { useFetchMediaQuery } from "shared/api/gallery";

import {GalleryFilter} from 'features/gallery-filter';

function App() {
    const {search, type} = useAppSelector(state => state.galleryFilter);
    const {data = []} = useFetchMediaQuery({search, type});
    
    return (
        <>
            <GalleryFilter />
            <MediaList data={data} />
        </>
    )
}
```