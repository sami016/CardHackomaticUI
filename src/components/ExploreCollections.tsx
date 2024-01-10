import React from "react";
import { useAppState } from "../state/provider";
import { observer } from "mobx-react-lite";
import { CollectionList } from "./CollectionList";

export const ExploreCollections = observer(() => {
    const appState = useAppState();
    const { collections } = appState;

    return <div className="">
        <CollectionList collections={collections.collections} injectContent={<AddCollection />} />

        {/* <CardList 
            cards={designer.cardVersions}
            cardEditorFactory={(card: ICard, index: number) => new DesignerCardEditor(designer, card, index)}
            injectContent={<AddCard />} /> */}
    </div>
});


const AddCollection = () => {
    const { collections } = useAppState();

    return <div className="collection-inserter m-3"
        onClick={() => collections.addNewCollection()}>
        <div className="text-center text-white">+</div>
    </div>;
}
