import type {FC} from 'react';
import {
    Box,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Menu,
    MenuButton,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
} from "@chakra-ui/react";
import { MdViewList, MdGridOn, MdExpandMore, MdSearch } from "react-icons/md";

import { useAppDispatch, useAppSelector } from "app/hooks";
import {MediaSource} from 'entities/gallery';
import {UploadButton} from 'features/gallery-upload-media';

import {setSearch, setType, setView } from "./slice";


// Panel for gallery config
const GalleryFilter:FC = () => {
    const dispatch = useAppDispatch();
    const {view, type, search} = useAppSelector(state => state.galleryConfig);

    return (
        <Flex
            direction={['column', null, 'row']}
            justifyContent="space-between"
            alignItems="center"
            borderWidth="1px"
            borderRadius="lg"
            p={2}
        >
            <Box>
                <IconButton
                    aria-label="list view"
                    icon={<MdViewList />}
                    onClick={() => dispatch(setView('list'))}
                    color={view === 'list' ? 'red.500' : 'blue.500'}
                    variant="ghost"
                    fontSize="2xl"
                />
                <IconButton
                    aria-label="table view"
                    icon={<MdGridOn />}
                    onClick={() => dispatch(setView('table'))}
                    color={view === 'table' ? 'red.500' : 'blue.500'}
                    variant="ghost"
                    fontSize="2xl"
                    mr={[0, null, 10]}
                />
                <UploadButton />
            </Box>

            <Box>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<MdSearch />}
                    />
                    <Input
                        placeholder="Search"
                        type="search"
                        value={search}
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                    />
                    <InputRightElement
                        children={
                            <Menu closeOnSelect={true} closeOnBlur={true}>
                                <MenuButton
                                    as={IconButton}
                                    icon={<MdExpandMore />}
                                    variant="ghost"
                                />
                                <MenuList minWidth="240px">
                                    <MenuOptionGroup
                                        type="radio"
                                        title="Type"
                                        value={type}
                                        onChange={(value) => {dispatch(setType(value as MediaSource | ''))}}
                                    >
                                        <MenuItemOption value="">all</MenuItemOption>
                                        <MenuItemOption value="audio">audio</MenuItemOption>
                                        <MenuItemOption value="image">image</MenuItemOption>
                                        <MenuItemOption value="video">video</MenuItemOption>
                                    </MenuOptionGroup>
                                </MenuList>
                            </Menu>
                        }
                    />
                </InputGroup>
            </Box>
        </Flex>
    );
}

export {GalleryFilter}
