import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import H1Text from '../components/H1Text';
import Card from '../components/Card';
import withCategory from '../hoc/withCategory';
import Loader from '../components/Loader';

class Category extends React.Component {
  render() {
    const {
      data, loading, currency, addToCart,
    } = this.props;
    if (loading) return <Loader />;
    return (
      <Layout>
        <H1Text>{data?.category?.name}</H1Text>
        <CategoryContainer>
          {
            data?.category?.products.map((prod, i) => (
              <Card
                currency={currency}
                addToCart={addToCart}
                key={i}
                product={prod}
              />
            ))
          }
        </CategoryContainer>
      </Layout>
    );
  }
}

export default withCategory(Category);

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 50px 0;
`;
