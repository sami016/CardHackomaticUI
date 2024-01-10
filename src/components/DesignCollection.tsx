import React, { useEffect } from "react";
import { ICardVersion } from '../models/ICardVersion';
import { CardList } from "./CardList";
import { useAppState } from "../state/provider";
import { observer } from "mobx-react-lite";
import { ICardEditor } from "./Card";
import { DesignerStore } from "../state/DesignerState";
import { ICard } from "../models/ICard";
import { useParams } from "react-router-dom";
import ContentEditable from "react-contenteditable";

export const DesignCollection = observer(() => {
    const { collectionId } = useParams();

    const appState = useAppState();
    const designer = appState.designer;
    useEffect(() => {
        appState.startDesigner(parseInt(collectionId!))
    }, [])
    if (designer === undefined) {
        return <div></div>
    }

    return <div className="">

        <div className="flex">

            <div className="flex-1 p-6 max-w-sm mx-auto mb-10 bg-white rounded-xl shadow-md flex items-center space-x-4 flex">

                <div>
                    <ContentEditable
                        className="text-xl font-medium text-black"
                        html={designer.collectionMetadata.name}
                        disabled={false}
                        onChange={e => designer.setCollectionName(e.target.value)}
                        tagName='div'
                    />
                    <ContentEditable
                        className="text-gray-500"
                        html={designer.collectionMetadata.description}
                        disabled={false}
                        onChange={e => designer.setCollectionDescription(e.target.value)}
                        tagName='p'
                    />
                </div>
            </div>

            <div className="flex-1 p-6 max-w-sm mx-auto mb-10 bg-white rounded-xl shadow-md flex items-center space-x-4 flex">
                <div className="text-xl font-medium text-black">Tags:</div>
                <ContentEditable
                    className="text-gray-500"
                    html={designer.collectionMetadata.tags.reduce((x, y) => x + " " + y, "")}
                    disabled={false}
                    onChange={e => designer.setCollectionTags(e.target.value)}
                    tagName='p'
                />
            </div>

        </div>
        <CardList
            cards={designer.cardVersions}
            cardEditorFactory={(card: ICard, index: number) => new DesignerCardEditor(designer, card, index)}
            injectContent={<AddCard />} />
    </div>
});

export class DesignerCardEditor implements ICardEditor {

    private designer: DesignerStore;
    private card: ICard;
    private index: number;

    constructor(
        designer: DesignerStore,
        card: ICard,
        index: number
    ) {
        this.designer = designer
        this.card = card
        this.index = index
    }

    setTitle(title: string): void {
        this.designer.updateCard(this.index, { ... this.card, title })
    }
    setImage(image: string): void {
        this.designer.updateCard(this.index, { ... this.card, image })
    }
    setDescription(description: string): void {
        this.designer.updateCard(this.index, { ... this.card, description })
    }
}

const AddCard = () => {
    const { designer } = useAppState();
    if (designer === undefined) {
        throw new Error('designer undefined');
    }

    return <div className="card-inserter m-3"
        onClick={() => designer.addNewCard()}>
        <div className="text-center text-white">+</div>
    </div>;
}