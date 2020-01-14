import React from 'react';
import CategoryList from '../../components/CategoryList';
import { useQuery } from '@apollo/react-hooks';
import cmsPageQuery from '../../queries/getCmsPage.graphql';
import { fullPageLoadingIndicator } from '../../components/LoadingIndicator';
import { number } from 'prop-types';

const CMS = (props) => {
    //return <CategoryList title="Shop by category" id={2} />;
    const { id } = props;
    const { loading, error, data } = useQuery(cmsPageQuery, {
        variables: {
            id: Number(id),
            onServer: false
        }
    });

    if (error) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(error);
        }
        return <div>Page Fetch Error</div>;
    }

    if (loading) {
        return fullPageLoadingIndicator;
    }

    if (data) {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: data.cmsPage.content}} />
            </div>
        );
    }
    return null;


};


CMS.propTypes = {
    id: number
};

export default CMS;
