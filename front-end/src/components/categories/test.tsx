import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  StyledProductAnchor,
  StyledProductContainer,
  StyledProductInfo,
  StyledProductPrice,
  StyledProductsContainer,
  StyledProductTitle,
} from '@/styles/styled/products.styles';
import axios from 'axios';

export default function Apartments(props) {
  const { product } = props;

  const router = useRouter();

  const handleProductClick = (e, index) => {
    e.preventDefault();
    router.push(
      `${process.env.NEXT_PUBLIC_FETCH_BASEURL}/products/${index}`
    );
  };

  return (
    <StyledProductsContainer>
      {product &&
        product.map((product) => {
          상품 정보 렌더링
          return (
            <StyledProductAnchor
              key={product._id}
              onClick={(e) => handleProductClick(e, product._id)}
            >
              {/* 함수를 호출하여 상품의 'slug' 값으로 라우팅 */}
              <StyledProductContainer>
                <Image
                  src={`${process.env.NEXT_PUBLIC_FETCH_BASEURL}/static/${product.image}`}
                  alt={`${product.image}`}
                  width={200}
                  height={200}
                />
                <StyledProductInfo>
                  <StyledProductTitle>{`${product.name}`}</StyledProductTitle>
                  {/* 렌더링하려면 `/${product.id}`이런 식으로 수정해야하나요? */}
                  <StyledProductPrice>
                    {`${product.price.toLocaleString()}`}
                  </StyledProductPrice>
                </StyledProductInfo>
              </StyledProductContainer>
            </StyledProductAnchor>
          );
        })}
    </StyledProductsContainer>
  );
}

export async function getServerSideProps({ params }) {
  // API를 호출해서 상품 데이터를 가져오는 경우
  // const res = await fetch("http://localhost:3000/api/products");
  // const products = await res.json();
  //`${NEXT_PUBLIC_FETCH_BASEURL}/api/v1/products/${params.id}}`
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_FETCH_BASEURL}/api/v1/products`
    );
    if (result.status === 200) {
      return {
        props: {
          product: result.data.data,
        },
      };
    } else {
      return {
        props: {
          product: null,
          error: {
            statusCode: result.status,
            title: `${result.statusText} - ${result.request.url}`,
          },
        },
      };
    }
  } catch (err) {
    console.error(err.response);
    const statusCode = err.response ? err.response.status : '에러발생';
    console.error(err.response);
    return {
      props: {
        product: null,
        error: {
          statusCode,
          title: err.response ? err.response.status : '에러발생',
        },
      },
    };
  }
}
