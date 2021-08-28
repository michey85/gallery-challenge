import {FC, useState} from 'react';
import { Button, Icon} from "@chakra-ui/react";
import { MdFileUpload } from "react-icons/md";

import {UploadDialog} from './UploadDialog';

export interface UploadButtonProps {
    text?: string;
}

const UploadButton:FC<UploadButtonProps> = ({text = 'Upload image'}) => {
    const [isUploading, setUploading] = useState(false);

    return (
        <>
            <Button
                leftIcon={<Icon
                    as={MdFileUpload}
                    color="red.300"
                    w={8}
                    h={8}
                />}
                color="red.300"
                variant="ghost"
                onClick={() => setUploading(true)}
            >
                {text}
            </Button>  

            <UploadDialog
                open={isUploading}
                handleClose={() => setUploading(false)}
            />
        </>
    )
}

export {UploadButton};
