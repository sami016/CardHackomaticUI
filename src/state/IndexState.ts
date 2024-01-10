import { action, autorun, makeAutoObservable, makeObservable, observable } from "mobx";
import { DesignerStore } from "./DesignerState";
import { CollectionsStore } from "./CollectionsStore";
import { LocalCollectionRepository } from "../infrastructure/LocalCollectionRepository";

export class IndexState {
    @observable designer: DesignerStore|undefined = undefined
    @observable collections: CollectionsStore

    constructor() {
        this.collections = new CollectionsStore(
            new LocalCollectionRepository()
        );
        
        makeAutoObservable(this)
    }

    @action.bound
    public startDesigner(collectionIndex: number) {
        const collection = this.collections.getByIndex(collectionIndex)
        if (collection === undefined) {
            throw new Error(`no collection with id ${collectionIndex}`);
        }
        this.designer = new DesignerStore(
            this,
            collectionIndex,
            collection.metadata,
            collection.cards
        );
        console.log('loaded designer store')
    }
}