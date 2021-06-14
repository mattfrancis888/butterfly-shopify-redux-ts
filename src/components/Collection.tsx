//Custom collection not from APIimport React from "react";
import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card } from "@shopify/polaris";
import { useQuery } from "@apollo/react-hooks";
import { getRedirectStatus } from "next/dist/lib/load-custom-routes";

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

const renderContent = (data) => {
    if (data) {
        return (
            <React.Fragment>
                <p>Hi</p>
                {data.collections.edges.map((collection, index) => {
                    return <Card key={index}>hi</Card>;
                })}
            </React.Fragment>
        );
    }
};

const Collection = () => {
    const { loading, error, data } = useQuery(GET_COLLECTIONS);

    if (error)
        return (
            <h1 className="queryErrorMessage">{`Error: ${error.message}`}</h1>
        );
    if (loading) {
        return <div className="loadingCenter">Loading</div>;
    }
    if (data) {
        console.log("Collections", data);
        console.log("Collections2", data.collections.edges);
        return <React.Fragment>{renderContent(data)}</React.Fragment>;
    }
};
export default Collection;
