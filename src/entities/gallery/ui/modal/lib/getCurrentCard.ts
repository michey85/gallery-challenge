import type {MediaCard} from '../../../model';

export function getCurrentCard(list: MediaCard[], activeId: number) {
    const currentCardId = list.findIndex((card) => card.id === activeId);
    const currentCard = list[currentCardId] as MediaCard;

    const prevCardId = currentCardId > 0 ? 
        list[currentCardId - 1].id : list[list.length - 1].id;
    const nextCardId = currentCardId < list.length - 1 ?
        list[currentCardId + 1].id : list[0].id;

    return {currentCard, prevCardId, nextCardId};
}
