import React from "react";
import { ICollection } from "../models/ICollection";
import { Collection } from "./Collection";
import './CollectionList.scss';

export const CollectionList = (props: { collections: ICollection[], injectContent?: JSX.Element }) => <div className="collection-list">
    {
        props.collections.map((x, idx) => <div key={idx} className="inline-block m-0.5 space-x-0.5 my-0.5">
            <Collection collection={x} index={idx} />
        </div>)
    }
    {props.injectContent}
</div>;