import React, { useRef, useEffect, useState, useCallback } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card } from "@shopify/polaris";
import { useQuery } from "@apollo/react-hooks";
import { getRedirectStatus } from "next/dist/lib/load-custom-routes";
import {
    TextField,
    TextContainer,
    Heading,
    Button,
    Stack,
    DisplayText,
} from "@shopify/polaris";
const GET_COLLECTIONS = gql`
    {
        collections(first: 10) {
            edges {
                node {
                    id
                    title
                    description
                    handle
                    productsCount
                }
            }
        }
    }
`;

const Result = (props) => {
    const { loading, error, data } = useQuery(GET_COLLECTIONS);
    // if (error)
    //     return (
    //         <h1 className="queryErrorMessage">{`Error: ${error.message}`}</h1>
    //     );
    // if (loading) {
    //     return <div className="loadingCenter">Loading</div>;
    // }
    // if (data) {
    //     return (
    //         <React.Fragment>
    //             <TextContainer spacing="tight">
    //                 <Heading>Install the Shopify POS App</Heading>
    //                 <p>
    //                     Shopify POS is the easiest way to sell your products in
    //                     person. Available for iPad, iPhone, and Android.
    //                 </p>
    //             </TextContainer>
    //         </React.Fragment>
    //     );
    // }
    return (
        <React.Fragment>
            <TextContainer spacing="tight">
                <Heading>Final Result</Heading>

                <DisplayText size="small">Collection: bla bla</DisplayText>
                <DisplayText size="small">
                    When Discount Takes Place For Collection:.
                </DisplayText>
                <DisplayText size="small">Discount Percentage</DisplayText>
            </TextContainer>
        </React.Fragment>
    );
};

export default Result;
