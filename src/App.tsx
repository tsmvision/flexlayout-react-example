import { useState } from 'react'

import './App.css'
import {IJsonModel, Layout, Model, Node, TabNode, Actions, Action} from 'flexlayout-react';
import 'flexlayout-react/style/light.css';

const json: IJsonModel = {
    global: {
        tabEnableClose:false,
        tabEnableFloat: true,
    },
    borders:[
        {
            type: "border",
            location:"bottom",
            size: 100,
            children: [
                {
                    type: "tab",
                    name: "bottom-left-border",
                    component: "text"
                }
            ]
        },
        {
            type: "border",
            location:"left",
            size: 100,
            children: []
        }
    ],
    layout: {
        type: "row",
        weight: 100,
        children: [
            {
                type: "row",
                weight: 50,
                children: [
                    {
                        type: "row",
                        // weight: 50,
                        children: [
                            {
                                type: "tabset",
                                name: "",
                                children: [
                                    {
                                        type: "tab",
                                        name: "top-left-first",
                                        component: "text"
                                    },
                                ]
                            },
                            {
                                type: "tabset",
                                name: "",
                                children: [
                                    {
                                        type: "tab",
                                        name: "top-left-second",
                                        component: "text"
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        type: "row",
                        // weight: 50,
                        children: [
                            {
                                type: "tabset",
                                name: "",
                                children: [
                                    {
                                        type: "tab",
                                        name: "bottom-left-first",
                                        component: "text"
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },

            {
                type: "row",
                weight: 50,
                children: [
                    {
                        type: "row",
                        weight: 50,
                        children: [
                            {
                                type: "tabset",
                                name: "",
                                children: [
                                    {
                                        type: "tab",
                                        name: "top-right-first",
                                        component: "text"
                                    },
                                ]
                            },
                            {
                                type: "tabset",
                                name: "",
                                children: [
                                    {
                                        type: "tab",
                                        name: "top-right-second",
                                        component: "text"
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        type: "row",
                        weight: 50,
                        children: [
                            {
                                type: "tabset",
                                name: "",
                                children: [
                                    {
                                        type: "tab",
                                        name: "bottom-right-first",
                                        component: "text"
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    }
};

const App = () => {

    const [model, setModel] = useState<Model>(Model.fromJson(json));

    const factory = (node: TabNode) => {
        const component = node.getComponent();

        if (component === "button") {
            return <button>{'11111' + node.getName()}</button>;
        }
    }

    const handleClick = () => {
        console.log('CLICKED');
    }

    return (
        <Layout
            model={model}
            factory={(node) => factory(node)}
            onRenderTabSet={(node, renderValues) => {
                renderValues.buttons.push(
                    <button
                        style={{backgroundColor: '#E2E2E2', color: 'black'}}
                        onClick={handleClick}
                        key={node.getId()}
                    >
                        Hello!
                    </button>
                )
            }}
        />
    );
}

export default App;
