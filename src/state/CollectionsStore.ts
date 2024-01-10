import { action, computed, makeAutoObservable, observable } from "mobx";
import { ICollectionMetadata } from "../models/ICollectionMetadata";
import { ICard } from "../models/ICard";
import { ICardVersion } from "../models/ICardVersion";
import { ICollection } from "../models/ICollection";
import { ICollectionRepository } from "../models/ICollectionRepository";

export class CollectionsStore {

    @observable collections: ICollection[];

    private collectionRepository: ICollectionRepository

    public constructor(
        collectionRepository: ICollectionRepository
    ) {
        makeAutoObservable(this)
        this.collectionRepository = collectionRepository;
        this.collections = this.collectionRepository.readAll();
    }

    @action.bound
    public updateCollection(index: number, collection: ICollection) {
        this.collections = this.collections
            .map((x, idx) => idx === index ? collection : x);
        this.persist();
    }

    @action.bound
    public addNewCollection(): void {
        this.collections = [
            ... this.collections, 
            {
                cards: [],
                metadata: {
                    name: 'Untitled',
                    description: 'TODO: Add a description for this collection.',
                    tags: [],
                    categories: [],
                    types: []
                }
            }
        ]
        this.persist();
    }

    @computed
    public getByIndex(index: number) {
        return this.collections?.[index]
    }

    @computed
    public import(collections: ICollection[]) {
        this.collections = collections
        this.persist();
    }

    private persist(): void {
        this.collectionRepository.writeAll(this.collections)
    }
}