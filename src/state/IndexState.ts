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

    @action.bound
    public export() {
        var content = JSON.stringify(this.collections.collections)
        this.saveStringToFile(content, 'export.json')
    }

    @action.bound
    public import() {
        this.beginImport();
    }

    saveStringToFile(content: string, filename: string): void {
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.click();
      }

    beginImport() {
        var input = document.createElement('input');
        input.type = 'file';

        input.onchange = ((e: Event) => { 
            var file = (e?.target as any)?.files?.[0];
            this.handleSelectedFile(file);
        });

        input.click();
    }

    handleSelectedFile(input: string) {
        var reader = new FileReader();
        
        reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
            var content = readerEvent.target?.result; // this is the content!
            if (content) {
                console.log(content);
                this.collections.import(JSON.parse(content as string));
            }
         }

        reader.readAsText(input, 'UTF-8');  // Read as text instead of binary data
    }
}