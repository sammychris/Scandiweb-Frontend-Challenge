import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import H1Text from '../components/H1Text';
import ProductCart from '../components/ProductCard';


const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px 0;
`;

// class Category extends React.Component {

//     componentDidMount() {
//       const { loading, error, data } = useQuery(GET_LOCATIONS);
//     }
//     render() {
//       return (
//         <Layout>
//             <H1Text>Category name</H1Text>
//             <CategoryContainer>
//                 <ProductCart></ProductCart>
//                 <ProductCart></ProductCart>
//                 <ProductCart></ProductCart>
//                 <ProductCart></ProductCart>
//                 <ProductCart></ProductCart>
//                 <ProductCart></ProductCart>
//             </CategoryContainer>
//         </Layout>
//       );
//     }
// }

function Category () {
  const {categories} = useSelector((state) => state.categories);
    return (
      <Layout>
          <H1Text>Category name</H1Text>
          <CategoryContainer>
              <ProductCart></ProductCart>
              <ProductCart></ProductCart>
              <ProductCart></ProductCart>
              <ProductCart></ProductCart>
              <ProductCart></ProductCart>
              <ProductCart></ProductCart>
              {
                    categories?.map(el => <NavLink  href={`/${el.name}`}>{el.name.toUpperCase()}</NavLink>)
                }
          </CategoryContainer>
      </Layout>
    );
}

export default Category;
