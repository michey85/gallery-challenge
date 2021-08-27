import type {FC} from 'react';
import { AspectRatio, Box, Image } from "@chakra-ui/react"
import { MdPlayCircleOutline, MdMusicVideo, MdImage } from "react-icons/md";

import type {MediaCard} from '../../model';

export interface CardProps extends MediaCard {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Card: FC<CardProps> = (props) => {
    const {
        id,
        date,
        name,
        type,
        url,
        onClick,
    } = props;

    return (
        <Box
            onClick={onClick}
        >
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

export {Card};
