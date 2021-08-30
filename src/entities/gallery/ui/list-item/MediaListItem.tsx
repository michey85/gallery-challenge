import type {FC} from 'react';
import { ListItem } from '@chakra-ui/react';


export interface MediaListItemProps {
    id: number;
    name: string;
    onClick?: (id: number | null) => void;
}

const MediaListItem: FC<MediaListItemProps> = (props) => {
    const {
        id,
        name,
        onClick,
    } = props;

    return (
        <ListItem
            onClick={onClick && (() => onClick(id))}
        >
            {name}
        </ListItem>
    )
}

export {MediaListItem};
