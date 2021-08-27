import { useAppDispatch, useAppSelector } from "app/hooks"
import { setUploading } from "features/gallery-config";
import { useState } from "react";
import { useAddMediaMutation } from ".";

import {Source} from 'types';
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select } from "@chakra-ui/react";

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
        <Modal isOpen={isUploading} onClose={() => dispatch(setUploading(false))}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Upload media</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Select placeholder="select a type" onChange={(e) => setType(e.target.value as Source)}>
                        <option value="audio">audio</option>
                        <option value="image">image</option>
                        <option value="video">video</option>
                    </Select>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input
                            name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}
                            isRequired
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Url</FormLabel>
                        <Input
                            type="url"
                            name="url"
                            placeholder="https://"
                            value={url} onChange={(e) => setUrl(e.target.value)}
                            isRequired
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <Input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleUpload}>Upload</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export {Upload}