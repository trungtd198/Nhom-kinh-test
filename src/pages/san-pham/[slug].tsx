import type { GetStaticPaths, GetStaticProps } from 'next';

import { ProductDetail } from '../../templates/ProductDetail';
import type { Product } from '../../utils/Data';
import { products } from '../../utils/Data';

type IProductPageProps = {
  product: Product;
};

const ProductPage = (props: IProductPageProps) => {
  return <ProductDetail product={props.product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
