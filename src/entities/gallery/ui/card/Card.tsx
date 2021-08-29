import type {FC} from 'react';
import { AspectRatio, Box, Flex, Icon, Image } from "@chakra-ui/react"
import { MdPlayCircleOutline, MdMusicVideo/*, MdImage*/ } from "react-icons/md";

import type {MediaCard} from '../../model';

export interface CardProps extends MediaCard {
    onClick?: (id: number | null) => void;
}

const Card: FC<CardProps> = (props) => {
    const {
        id,
        // date,
        name,
        type,
        url,
        onClick,
    } = props;

    return (
        <Box
            onClick={onClick && (() => onClick(id))}
            bg="gray.100"
            cursor="pointer"
        >       
            <AspectRatio
                ratio={1}
            >     
                 {type === 'image' ? (
                    <Image
                        objectFit="cover"
                        alt={name}
                        srcSet={url}
                        src="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                    />
                    ) : (
                    <Flex alignItems="center" justifyContent="center" w="100%" h="100%">
                        <Icon
                            as={type === 'video' ? MdPlayCircleOutline : MdMusicVideo}
                            w={12}
                            h={12}
                        />
                    </Flex>
            )}
            </AspectRatio>
        </Box>
    )
}

export {Card};
