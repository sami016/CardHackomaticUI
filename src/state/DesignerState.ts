import { action, computed, makeAutoObservable, observable } from "mobx";
import { ICollectionMetadata } from "../models/ICollectionMetadata";
import { ICard } from "../models/ICard";
import { ICardVersion } from "../models/ICardVersion";
import { IndexState } from "./IndexState";

const defaultIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDI1NiAyNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNTYiIHdpZHRoPSIyNTYiLz48Y2lyY2xlIGN4PSIxMjgiIGN5PSIxMjgiIGZpbGw9Im5vbmUiIHI9Ijk2IiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxMiIvPjxjaXJjbGUgY3g9IjEyOCIgY3k9IjE4MCIgcj0iMTAiLz48cGF0aCBkPSJNMTI4LDE0NHYtOGEyOCwyOCwwLDEsMC0yOC0yOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMTIiLz48L3N2Zz4=";

export class DesignerStore {

    indexState: IndexState
    collectionIndex: number
    @observable collectionMetadata: ICollectionMetadata;
    @observable cardDefinitions: ICard[];

    public constructor(
        indexState: IndexState,
        collectionIndex: number,
        collectionMetadata: ICollectionMetadata,
        cardDefinitions: ICard[]
    ) {
        makeAutoObservable(this);
        this.indexState = indexState;
        this.collectionIndex = collectionIndex;
        this.collectionMetadata = collectionMetadata;
        this.cardDefinitions = cardDefinitions;
    }

    @computed
    public get cardVersions(): ICardVersion[] {
        return this.cardDefinitions
            .map(x => ({
                definition: x
            } as ICardVersion))
    }

    @action.bound
    public addNewCard(): void {
        this.cardDefinitions = [
            ... this.cardDefinitions, 
            {
                category: [],
                description: '',
                image: defaultIcon,
                title: '',
                type: ''
            }
        ];
        this.save();
    }

    @action.bound
    public setCollectionName(name: string): void {
        this.collectionMetadata.name = name;
        this.save();
    }

    @action.bound
    public setCollectionDescription(description: string): void {
        this.collectionMetadata.description = description;
        this.save();
    }

    @action.bound
    public setCollectionTags(tags: string) {
        this.collectionMetadata.tags = tags.split(" ")
            .filter(x => x.length > 0)
        this.save();
    }

    @action.bound
    public updateCard(index: number, details: ICard): void {
        this.cardDefinitions = this.cardDefinitions
            .map((x, idx) => index === idx ? details : x);
        this.save();
    }

    @action.bound
    public updateMetadata(metadata: ICollectionMetadata): void {
        this.collectionMetadata = metadata;
        this.save();
    }

    @action.bound
    public save() {
        this.indexState.collections.updateCollection(this.collectionIndex, {
            cards: this.cardDefinitions,
            metadata: this.collectionMetadata
        })
    }
}