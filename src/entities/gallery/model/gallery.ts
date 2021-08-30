export interface MediaCard {
    id: number;
    type: MediaSource;
    name: string;
    url: string;
    date: Date;
}

export type MediaSource = 'image' | 'video' | 'audio';
export type MediaViewType = 'table' | 'list';