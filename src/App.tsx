import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { IndexState } from "./state/IndexState";
import { StateContext } from "./state/provider";
import { Routes } from "./Routes";
import { Nav } from "./components/Nav";

// const card: ICard = {
//     title: 'Strike',
//     description: 'Hit the enemy',
//     category: [],
//     type: '',
//     image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDI1NiAyNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNTYiIHdpZHRoPSIyNTYiLz48Y2lyY2xlIGN4PSIxMjgiIGN5PSIxMjgiIGZpbGw9Im5vbmUiIHI9Ijk2IiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxMiIvPjxjaXJjbGUgY3g9IjEyOCIgY3k9IjE4MCIgcj0iMTAiLz48cGF0aCBkPSJNMTI4LDE0NHYtOGEyOCwyOCwwLDEsMC0yOC0yOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMTIiLz48L3N2Zz4='
// }
// const cardVersion: ICardVersion = {
//     definition: card
// }
const state = new IndexState();

const App = () => (
    <StateContext.Provider value={state}>
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <Nav />
            <Routes />
        </div>
    </StateContext.Provider>
);
ReactDOM.render(<App />, document.getElementById("app"));
