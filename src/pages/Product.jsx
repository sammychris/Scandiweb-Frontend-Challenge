import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SizeBox from '../components/SizeBox';
import ColorBox from '../components/ColorBox';
import H2Text from '../components/H2Text';
import H3Text from '../components/H3Text';
import H4Text from '../components/H4Text';
import CommonButton from '../components/CommonButton';
import Paragraph from '../components/Paragraph';
import withProduct from '../hoc/withProduct';
import Loader from '../components/Loader';

class Product extends React.Component {
  render() {
    const {
      loading, product, onSelect, currency, addToCart, galleryIndex, setGalleryIndex,
    } = this.props;
    const price = product?.prices?.find((el) => el.currency.label === currency.label);
    if (loading) return <Loader />;
    return (
      <Layout>
        <ProductContainer>
          <ProductImages>
            <Gallery>
              {
                product.gallery.map((url, i) => <ImgItem key={i} src={url} href="#" onMouseEnter={() => setGalleryIndex(i)} onMouseLeave={() => setGalleryIndex(0)} />)
              }
            </Gallery>
            <div style={{
              height: 510, width: 610, display: 'flex', justifyContent: 'center',
            }}
            >
              <Image src={product.gallery[galleryIndex]} />
            </div>
          </ProductImages>
          <ProductDetails>
            <H2Text>{product.brand}</H2Text>
            <H2Text style={{ fontWeight: 400, marginBottom: 43 }}>{product.name}</H2Text>
            {
              product.attributes?.map((attr, i) => (
                <div id={attr.id} key={i}>
                  <H4Text>
                    {attr.name}
                    :
                    {' '}
                  </H4Text>
                  <Boxes>
                    {
                      attr.type === 'swatch'
                        ? attr.items.map((item, i) => (
                          <ColorBox
                            selected={item.selected}
                            value={item.value}
                            id={item.id}
                            key={i}
                            onClick={(e) => onSelect({ e, attr, item })}
                            style={{cursor: 'pointer'}}
                          />
                        ))
                        : attr.items.map((item, i) => (
                          <SizeBox
                            selected={item.selected}
                            value={item.value}
                            id={item.id}
                            key={i}
                            onClick={(e) => onSelect({ e, attr, item })}
                            style={{cursor: 'pointer'}}
                          />
                        ))
                    }
                  </Boxes>
                </div>
              ))
            }
            <H4Text style={{ marginBottom: 20 }}>PRICE:</H4Text>
            <H3Text style={{ marginBottom: 30 }}>{price.currency.symbol + price.amount.toFixed(2)}</H3Text>
            {product.inStock && <CommonButton onClick={addToCart} style={{ marginBottom: 40 }}>Add to Cart</CommonButton>}
            <Paragraph>{product.description}</Paragraph>
          </ProductDetails>
        </ProductContainer>
      </Layout>
    );
  }
}

export default withProduct(Product);

const ProductContainer = styled.div`
    display: flex;
`;
const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    width: 79px;
`;
const ProductImages = styled.div`
    display: flex;
    width: 750px;
`;
const ProductDetails = styled.div`
    width: 292px;
    margin: 0 50px;
`;
const Boxes = styled.div`
    display: flex;
    width: 290px;
    margin-bottom: 30px;
`;
const Image = styled.img`
    display: block;
    width: auto;
    height: auto;
    margin: 0 50px;
`;
const ImgItem = styled.a`
    display: flex;
    width: 79px;
    height: 80px;
    background-image: url(${(props) => props.src});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 20px;
`;
