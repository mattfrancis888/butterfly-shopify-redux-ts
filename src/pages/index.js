import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    Stack,
    Tag,
} from "@shopify/polaris";
import React, { useState, useCallback } from "react";
import Nav from "../components/Nav";
import Input from "../components/shopify/Input";
import AutoComplete from "../components/shopify/AutoComplete";

const Index = () => {
    return (
        <Page>
            <h1>Hello</h1>
            <Nav />

            <Input />
            <AutoComplete />
        </Page>
    );
};

export default Index;
