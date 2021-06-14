import React, { useRef, useEffect, useState, useCallback } from "react";
import { Autocomplete } from "@shopify/polaris";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
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

const renderOptions = (data: any) => {
    let deselectedOptions: any = [];
    if (data.collections.edges.length > 0) {
        console.log("hi", data.collections.edges.length);
        //@ts-ignore
        data.collections.edges.map((collection, index) => {
            let optionObj: any = {};
            optionObj.value = collection.node.title;
            optionObj.label = collection.node.title;
            deselectedOptions.push(optionObj);
        });
    }
    return deselectedOptions;
};

const AutoComplete = (props: any) => {
    const deselectedOptions = [
        { value: "rustic", label: "Rustic" },
        { value: "antique", label: "Antique" },
        { value: "vinyl", label: "Vinyl" },
        { value: "vintage", label: "Vintage" },
        { value: "refurbished", label: "Refurbished" },
    ];
    const [options, setOptions] = useState(deselectedOptions);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [firstRender, setFirstRender] = useState(true);

    const updateText = useCallback(
        (value) => {
            setInputValue(value);

            if (value === "") {
                setOptions(deselectedOptions);
                return;
            }

            const filterRegex = new RegExp(value, "i");
            const resultOptions = deselectedOptions.filter((option) =>
                option.label.match(filterRegex)
            );
            setOptions(resultOptions);
        },
        [deselectedOptions]
    );

    const updateSelection = useCallback(
        (selected) => {
            //@ts-ignore
            const selectedValue = selected.map((selectedItem) => {
                const matchedOption = options.find((option) => {
                    return option.value.match(selectedItem);
                });
                return matchedOption && matchedOption.label;
            });

            setInputValue(selectedValue[0]); //Note to me: Changed this compared to the API so that autocomplete shows input after dropdown is selected
            setSelectedOptions(selected);
        },
        [options]
    );

    const textField = (
        <Autocomplete.TextField
            onChange={updateText}
            label="Collection"
            value={inputValue}
            // prefix={<Icon source={SearchMinor} color="base" />}
            placeholder="Search"
        />
    );

    const { loading, error, data } = useQuery(GET_COLLECTIONS);
    if (error)
        return (
            <h1 className="queryErrorMessage">{`Error: ${error.message}`}</h1>
        );
    if (loading) {
        return <div className="loadingCenter">Loading</div>;
    }
    if (data && firstRender) {
        setOptions(renderOptions(data));
        console.log("Collections4", options);
        setFirstRender(false);
        return <span></span>;
    } else {
        return (
            <div style={{ height: "225px" }}>
                <Autocomplete
                    options={options}
                    selected={selectedOptions}
                    // onSelect={updateSelection}
                    textField={textField}
                />
            </div>
        );
    }
};
export default AutoComplete;
