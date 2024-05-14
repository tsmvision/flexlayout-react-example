import {Component, ReactNode, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {IJsonModel, Layout, Model} from 'flexlayout-react';
import 'flexlayout-react/style/light.css';

const json: IJsonModel = {
    global: {tabEnableClose:false},
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

    // @ts-expect-error
    const factory = (node: any) => {
        const component = node.getComponent();

        if (component === "button") {
            return <button>{node.getName()}</button>;
        }
    }

    return (
        <Layout
            model={model}
            factory={factory}
        />
    );
}

export default App;
