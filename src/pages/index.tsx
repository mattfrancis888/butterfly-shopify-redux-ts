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
import Input from "../components/Input";
import InputTag from "../components/InputTag";
import AutoComplete from "../components/AutoComplete";
import InputCalendar from "../components/InputCalendar";
import DiscountForm from "../components/DiscountForm";
import Result from "../components/Result";

const Index = () => {
    return (
        <Page>
            <Layout>
                <Layout.AnnotatedSection
                    title="Enter Collection"
                    description="Collection will be used for discounts"
                >
                    <Card sectioned>
                        <AutoComplete />
                        <Stack distribution="trailing">
                            <Button primary submit>
                                Submit
                            </Button>
                        </Stack>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection
                    title="Add/Remove Tag For Products"
                    description="Tag will be used to identify products"
                >
                    <Card sectioned>
                        <InputTag title="Tag" />
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
            {/* <div className="layoutSpacing">
            <Layout>
                <Layout.AnnotatedSection
                    title="Add Custom Tag To Product"
                    description="Tag will be used to identify products"
                >
                    <Card sectioned>
                        <InputTag title="Tag" />
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
        </div> */}
            {/*Calendar */}

            <div className="layoutSpacing">
                <Layout>
                    <Layout.AnnotatedSection
                        title="When will your discount take place?"
                        description="Enter your start date and end date for your discount"
                    >
                        <Card sectioned>
                            <InputCalendar />
                        </Card>
                    </Layout.AnnotatedSection>
                </Layout>
            </div>
            <div className="layoutSpacing">
                <Layout>
                    <Layout.AnnotatedSection
                        title="Discount Percentage"
                        description="Select 'Flat Discount' or 'Discount Based On Tag'"
                    >
                        <Card sectioned>
                            <DiscountForm />
                        </Card>
                    </Layout.AnnotatedSection>
                </Layout>
            </div>
            <div className="layoutSpacing">
                <Result />
            </div>
        </Page>
    );
};

export default Index;
