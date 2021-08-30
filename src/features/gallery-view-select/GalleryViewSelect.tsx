import type {FC} from 'react';
import {IconButton} from "@chakra-ui/react";
import { MdViewList, MdGridOn } from "react-icons/md";

import { useAppDispatch, useAppSelector } from "app/hooks";
import {setView } from "./slice";


const GalleryViewSelect:FC = () => {
    const dispatch = useAppDispatch();
    const {view} = useAppSelector(state => state.galleryView);


    return (
        <>
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
                />   
        </>
    )
}

export {GalleryViewSelect};
