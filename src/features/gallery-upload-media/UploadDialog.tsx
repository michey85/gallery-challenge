import {createPortal} from 'react-dom';
import { FC, useState } from "react";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select } from "@chakra-ui/react";

import { MediaSource } from 'entities/gallery';

import { useAddMediaMutation } from "shared/api/gallery";

export interface UploadProps {
    open: boolean;
    handleClose: () => void;
}

const UploadDialog: FC<UploadProps> = (props) => {
    const {open, handleClose} = props;

    const [addMedia] = useAddMediaMutation();

    // TODO: refactor to useReducer
    const [type, setType] = useState<MediaSource>('audio');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [date, setDate] = useState('');

    const handleUpload = async () => {
        await addMedia({
            type,
            name,
            url,
            date
        }).unwrap();

        // TODO: сброс значений полей
        handleClose();
    }

    if (!open) return null;

    return createPortal(
        <Modal isOpen={open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Upload media</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Select
                        placeholder="select a type"
                        onChange={(e) => setType(e.target.value as MediaSource)}
                    >
                        <option value="audio">audio</option>
                        <option value="image">image</option>
                        <option value="video">video</option>
                    </Select>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input
                            name="name"
                            placeholder="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        {/* TODO: change with react-datepicker */}
                        <Input
                            type="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleUpload}>Upload</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>,
        document.body
    );
}

export {UploadDialog}