import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import H1Text from '../components/H1Text';
import Card from '../components/Card';
import { useQuery, gql } from '@apollo/client';
import { useParams } from "react-router-dom";


const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px 0;
`;

function Category () {
    let { name } = useParams();
    const { loading, error, data } = useQuery(QUERY(name));
    if(loading) return <div>Loading...</div>

    return (
      <Layout>
          <H1Text>{data?.category?.name}</H1Text>
          <CategoryContainer>
              {
                data?.category?.products.map(el => <Card photo={el.gallery[0]} name={el.name} id={el.id} />)
              }
          </CategoryContainer>
      </Layout>
    );
}

export default Category;

const QUERY = (name) => gql`
{
	category (input: { title: "${name || 'all'}" }) {
    name
    products {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
}`;