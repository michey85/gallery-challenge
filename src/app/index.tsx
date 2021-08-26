import './index.scss';
import { useFetchMediaQuery } from 'features/gallery-api';
import {View} from 'features/gallery-config';
import { Upload } from 'features/gallery-api';

function App() {
  const { data: media = [], isLoading } = useFetchMediaQuery();

  return (
    <div>
      <View />
      <Upload />
      <p>Count of media: {media.length}</p>
    </div>
  );
}

export default App;
