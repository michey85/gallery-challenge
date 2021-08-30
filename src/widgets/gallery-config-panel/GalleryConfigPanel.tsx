import type {FC} from 'react';
import { Box, Flex, Stack } from "@chakra-ui/react";

import {UploadButton} from 'features/gallery-upload-media';
import {GalleryViewSelect} from 'features/gallery-view-select';
import {GalleryFilter} from 'features/gallery-filter';

const GalleryConfigPanel: FC = () => {
    return (
        <Flex
            direction={['column', null, 'row']}
            justifyContent="space-between"
            alignItems="center"
            borderWidth="1px"
            borderRadius="lg"
            p={2}
        >
            <Stack spacing="8" direction="row">
                <Box>
                    <GalleryViewSelect />
                </Box>
                <UploadButton />
            </Stack>

            <Box>
                <GalleryFilter />
            </Box>
        </Flex>
    )
}

export {GalleryConfigPanel};
