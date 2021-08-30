import type { FC } from 'react';
import {
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
} from '@chakra-ui/react';
import { MdExpandMore, MdSearch } from 'react-icons/md';

import { useAppDispatch, useAppSelector } from "shared/hooks";
import {MediaSource} from 'entities/gallery';

import {setSearch, setType } from "./slice";


const GalleryFilter:FC = () => {
    const dispatch = useAppDispatch();
    const {type, search} = useAppSelector(state => state.galleryFilter);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none' children={<MdSearch />} />
      <Input
        placeholder='Search'
        type='search'
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <InputRightElement
        children={
          <Menu closeOnSelect={true} closeOnBlur={true}>
            <MenuButton
              as={IconButton}
              icon={<MdExpandMore />}
              variant='ghost'
            />
            <MenuList minWidth='240px'>
              <MenuOptionGroup
                type='radio'
                title='Type'
                value={type}
                onChange={(value) => {
                  dispatch(setType(value as MediaSource | ''));
                }}
              >
                <MenuItemOption value=''>all</MenuItemOption>
                <MenuItemOption value='audio'>audio</MenuItemOption>
                <MenuItemOption value='image'>image</MenuItemOption>
                <MenuItemOption value='video'>video</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        }
      />
    </InputGroup>
  );
};

export { GalleryFilter };
