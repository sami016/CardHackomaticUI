import React from "react";
import { useAppState } from "../state/provider";
import { observer } from "mobx-react-lite";
import { CollectionList } from "./CollectionList";

export const Settings = observer(() => {
    const appState = useAppState();
    const { collections } = appState;

    return <div className="">
        <div>
            <button onClick={() => appState.export()}>Export to JSON file</button>
        </div>
        <div>
            <button onClick={() => appState.import()}>Import from JSON file (warning - this will overwrite the current state!)</button>
        </div>
    </div>
});

