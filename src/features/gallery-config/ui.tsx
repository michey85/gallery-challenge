import { useAppDispatch, useAppSelector } from "app/hooks";
import { setSearch, setType, setUploading, setView } from "./slice";
import {Source} from 'types';

// Panel for gallery config
const View = () => {
    const dispatch = useAppDispatch();
    const {search, type, view} = useAppSelector(state => state.galleryConfig);

    return (
        <div>
            <ul>
                <li
                    style={{fontWeight: view === 'table' ? 700 : 400}}
                    onClick={() => dispatch(setView('table'))}
                >
                    table
                </li>
                <li
                    style={{fontWeight: view === 'list' ? 700 : 400}}
                    onClick={() => dispatch(setView('list'))}
                >
                    list
                </li>
            </ul>
            <div>
                <button
                    onClick={() => dispatch(setUploading(true))}
                >
                    Upload
                </button>
            </div>
            <div>
                <input
                    type="search"
                    value={search}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                />
            </div>
            <div>
                <select value={type} onChange={(e) => dispatch(setType(e.target.value as Source | ''))}>
                    <option value="">all</option>
                    <option value="audio">audio</option>
                    <option value="image">image</option>
                    <option value="video">video</option>
                </select>
            </div>
        </div>
    );
}

export {View}
