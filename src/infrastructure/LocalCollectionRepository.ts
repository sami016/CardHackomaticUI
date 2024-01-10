import { ICollection } from "../models/ICollection";
import { ICollectionRepository } from "../models/ICollectionRepository";

const collectionsEntryName = 'collections'

export class LocalCollectionRepository implements ICollectionRepository {
    writeAll(collections: ICollection[]): void {
        localStorage.setItem(collectionsEntryName, JSON.stringify(collections))
    }

    readAll(): ICollection[] {
        const existingValue = localStorage.getItem(collectionsEntryName)
        if (existingValue === null) {
            return []
        }
        return JSON.parse(existingValue)
    }
}