'use client'

import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface Product {
  _id: string
  name: string
  price: number
  image: string
}

interface ProductListProps {
  product: Product[]
}

const ProductList: React.FC<ProductListProps> = (props) => {
  const router = useRouter()

  const { product } = props

  const handleProductClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault()
    router.push(`/api/mockup/products/${id}`)
  }

  return (
    <div className="products-container">
      {product &&
        product.map((product) => {
          return (
            <a
              key={product._id}
              href="#"
              className="product-anchor"
              onClick={(e) => handleProductClick(e, product._id)}
            >
              <div className="product-container">
                <img
                  src={`${process.env.NEXT_PUBLIC_FETCH_BASEURL}/static/${product.image}`}
                  alt={product.image}
                  width={200}
                  height={200}
                />
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">
                    {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </a>
          )
        })}
    </div>
  )
}

export default ProductList

// 'use client'

// import { useState, useEffect } from 'react'
// import InfiniteScroll from 'react-infinite-scroll-component'

// // 상품 목록을 가져오는 비동기 함수를 호출하여 페이지별로 상품을 가져옴

// type Product = {
//   id: number
//   name: string
//   price: number
// }

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([])
//   const [hasMore, setHasMore] = useState(true)
//   const [page, setPage] = useState(1)

//   useEffect(() => {
//     // 상품 목록을 가져오는 비동기 함수를 호출하고 상태를 업데이트
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`/app/api/mockup/products`)
//         // const response = await fetch(`/api/mockup/products?page=${page}`)
//         const data = await response.json()
//         const newProducts = data.products

//         if (newProducts.length === 0) {
//           setHasMore(false) // 가져올 상품이 없으면 더 이상 무한 스크롤하지 않음
//         } else {
//           setProducts((prevProducts) => [...prevProducts, ...newProducts])
//           setPage((prevPage) => prevPage + 1)
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error)
//       }
//     }

//     fetchProducts()
//   }, [page])

//   return (
//     <InfiniteScroll
//       dataLength={products.length}
//       next={() => setPage((prevPage) => prevPage + 1)}
//       hasMore={hasMore}
//       loader={<h4>Loading...</h4>}
//     >
//       {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>Price: ${product.price}</p>
//         </div>
//       ))}
//     </InfiniteScroll>
//   )
// }

// export default ProductList
