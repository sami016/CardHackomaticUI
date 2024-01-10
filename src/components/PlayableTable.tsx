import React, { useEffect } from "react";
import { useAppState } from "../state/provider";
import { observer } from "mobx-react-lite";

export const PlayableTable = observer(() => {
    const appState = useAppState();

    return <div className="">

        <div className="flex">

            <div className="flex-1 p-6 max-w-sm mx-auto mb-10 bg-white rounded-xl shadow-md flex items-center space-x-4 flex">
                <p className="text-xl font-medium text-black">Play</p>
            </div>

        </div>

    </div>
});
