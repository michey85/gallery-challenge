import type { FC } from 'react';
import * as R from 'ramda';

export interface VideoComponentProps {
    source: string;
    name: string;
}

const VideoComponent: FC<VideoComponentProps> = (props) => {
    const {source, name} = props;

    const url = transformYouTubeUrl(source);

    return (
        <iframe
            width="100%"
            style={{
                minHeight: "calc(100vh - 200px)"
            }}
            title={name}
            src={url}
            allowFullScreen
        />
    )
}

export {VideoComponent};

// Helpers
const transformYouTubeUrl = R.pipe<string, string[], string, readonly string[], any, string, string>(
    R.split('?'),
    R.last,
    R.split('&'),
    R.find(R.includes('v=')),
    R.slice(2, Infinity),
    R.concat('https://www.youtube.com/embed/'),
)