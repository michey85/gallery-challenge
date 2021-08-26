import { useAppDispatch, useAppSelector } from "app/hooks"
import { setUploading } from "features/gallery-config";
import { useState } from "react";
import { useAddMediaMutation } from ".";

import {Source} from 'types';

const Upload = () => {
    const {isUploading} = useAppSelector(state => state.galleryConfig);
    const dispatch = useAppDispatch();
    const [addMedia] = useAddMediaMutation();

    // TODO: refactor to useReducer
    const [type, setType] = useState<Source>('audio');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [date, setDate] = useState('');

    if (!isUploading) return null;

    const handleUpload = async () => {
        await addMedia({
            type,
            name,
            url,
            date
        }).unwrap();

        // TODO: сброс значений полей
        dispatch(setUploading(false))
    }

    return (
        <div>
            <select value={type} onChange={(e) => setType(e.target.value as Source)}>
                <option value="" disabled>select a type</option>
                <option value="audio">audio</option>
                <option value="image">image</option>
                <option value="video">video</option>
            </select>
            <div>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="url" value={url} onChange={(e) => setUrl(e.target.value)} />
            </div>
            <div>
                <input type="datetime" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export {Upload}