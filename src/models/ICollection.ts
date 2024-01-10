import { ICard } from "./ICard";
import { ICollectionMetadata } from "./ICollectionMetadata";

export interface ICollection {
    metadata: ICollectionMetadata;
    cards: ICard[];
}
