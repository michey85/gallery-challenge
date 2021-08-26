import './index.scss';
import { useFetchMediaQuery, useAddMediaMutation } from 'features/gallery';

function App() {
  const { data: media = [], isLoading } = useFetchMediaQuery();
  const [addMedia, { isSuccess }] = useAddMediaMutation();

  return (
    <div>
      <p>Count of media: {media.length}</p>
      <button
        onClick={async () =>
          await addMedia({
            type: 'image',
            name: 'Demo image 7',
            url: 'demo.url.com/images/four.jpg',
            date: 'Fri Apr 19 2019 09:00:56 GMT+0200',
          }).unwrap()
        }
      >
        Add Media
      </button>
    </div>
  );
}

export default App;
