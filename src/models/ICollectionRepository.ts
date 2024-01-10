import { ICollection } from "./ICollection";

export interface ICollectionRepository {
    writeAll(collections: ICollection[]): void;
    readAll(): ICollection[];
}