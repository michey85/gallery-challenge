import type {FC} from 'react';


interface AudioComponentProps {
    source: string;
}

const AudioComponent: FC<AudioComponentProps> = (props) => {
    const {source} = props;

    return (
        <audio controls src={source} />
    )
}

export {AudioComponent};
