import type {FC} from 'react';

import { Box, Button, Flex, Icon, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import { MdViewList, MdGridOn, MdFileUpload, MdExpandMore, MdSearch } from "react-icons/md";

import { useAppDispatch, useAppSelector } from "app/hooks";
import {MediaSource} from 'entities/gallery';

import { setUploading, setView } from "./slice";


export interface GalleryFilterProps {
    search: string;
    handleSearch: (search: string) => void;
    type: "" | MediaSource;
    handleType: (type: "" | MediaSource) => void;
}

// Panel for gallery config
const GalleryFilter:FC<GalleryFilterProps> = (props) => {
    const {handleSearch, search, type, handleType} = props;

    const dispatch = useAppDispatch();
    const {view} = useAppSelector(state => state.galleryConfig);

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
                <Button
                    leftIcon={<Icon
                        as={MdFileUpload}
                        color="red.300"
                        w={8}
                        h={8}
                    />}
                    color="red.300"
                    variant="ghost"
                    onClick={() => dispatch(setUploading(true))}
                >
                    Upload image
                </Button>
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
                        onChange={(e) => handleSearch(e.target.value)}
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
                                        onChange={(value) => {handleType(value as MediaSource | '')}}
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
