import type {FC} from 'react';
import { AspectRatio, Box, Image } from "@chakra-ui/react"
import { MdPlayCircleOutline, MdMusicVideo, MdImage } from "react-icons/md";

import type {MediaCard as MediaCardProps} from '.';

const MediaCard: FC<MediaCardProps> = (props) => {
    const {
        id,
        date,
        name,
        type,
        url,
    } = props;

    return (
        <Box>
            <AspectRatio
                ratio={1}
            >
                {type === 'image' ? (
                    <Image
                        objectFit="cover"
                        alt={name}
                        src={url}
                    />
                ) : type === 'video' && (
                    <iframe
                        title={name}
                        src={url}
                        allowFullScreen
                    />
                )}
            </AspectRatio>
        </Box>
    )
}

export {MediaCard};
