import type {FC} from 'react';

import {
    Box,
    Button,
    IconButton,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Portal,
} from '@chakra-ui/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { useAppDispatch, useAppSelector } from 'shared/hooks';
import {setModalViewSource} from 'entities/gallery';

import type {MediaCard} from '../../model';
import {getCurrentCard} from './lib/getCurrentCard';
import { VideoComponent } from './ui/VideoComponent';
import { AudioComponent } from './ui/AudioComponent';

export interface ModalCardProps {
    list: MediaCard[];
}

const ModalCard: FC<ModalCardProps> = (props) => {
    const dispatch = useAppDispatch();
    const {modalViewSourceId: activeId} = useAppSelector(state => state.galleryModal)
    const {list} = props;

    if (!activeId) return null;

    const {currentCard, prevCardId, nextCardId} = getCurrentCard(list, activeId);

    return (
        <Portal>
        <Modal
            isOpen={Boolean(activeId)}
            onClose={() => dispatch(setModalViewSource(null))}
            isCentered
            size="full"
        >
            <ModalOverlay />
            <ModalContent maxW={'1000px'}>
                <ModalHeader>
                    {currentCard.name}
                </ModalHeader>
                <ModalCloseButton />

                <ModalBody justifyContent="center" display="flex" alignItems="center">
                    {currentCard.type === 'image' && (
                        <Image
                            objectFit="contain"
                            src={currentCard.url}
                        />
                    )}
                    {currentCard.type === 'video' && (
                            <VideoComponent source={currentCard.url} name={currentCard.name} />
                        )
                    }
                    {currentCard.type === 'audio' && (
                        <AudioComponent source={currentCard.url} />
                    )}
                </ModalBody>

                <ModalFooter>
                    <Box flexGrow={1}>
                        <IconButton
                            aria-label="Prev media"
                            icon={<MdChevronLeft />}
                            mr="1"
                            onClick={() => dispatch(setModalViewSource(prevCardId))}
                        />
                        <IconButton
                            aria-label="Next media"
                            icon={<MdChevronRight />}
                            onClick={() => dispatch(setModalViewSource(nextCardId))}
                        />
                    </Box>
                    <Button
                        as="a"
                        href={currentCard.url}
                        download
                    >
                        Download
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </Portal>
    )
}

export {ModalCard};
