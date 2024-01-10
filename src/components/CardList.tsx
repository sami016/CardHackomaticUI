import React from "react";
import { ICardVersion } from '../models/ICardVersion';
import { Card, ICardEditor } from "./Card";
import { ICard } from "../models/ICard";

export const CardList = (props: { cards: ICardVersion[], cardEditorFactory: (card: ICard, index: number) => ICardEditor, injectContent?: JSX.Element }) => 
<div className="card-list flex flex-wrap items-center justify-start">
    {
        props.cards.map((x, idx) => <div key={idx} className="flex-0 mx-0.5 my-0.5">
            <Card cardVersion={x} cardEditor={props.cardEditorFactory(x.definition, idx)}  />
        </div>)
    }
    {props.injectContent}
</div>;