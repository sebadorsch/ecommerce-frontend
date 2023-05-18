import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout/Layout.jsx'
import { CarouselProducts } from '../../components/CarouselProducts/CarouselProducts.jsx'
import './styles.scss'
import categoriesClassification from '../../../categoriesClassification.json'
import { authGlobalState } from '../../context/authcontext/AuthContext.jsx'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function HomePage() {
  const [products, setProducts] = useState(null)

  const { showCart, setShowCart } = authGlobalState(false)

  const getProduct = async () => {
    const products = await fetch(`https://dummyjson.com/products?limit=100`)
    const data = await products.json()
    setProducts(data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  const filterByCategories = (arrayOfFilters) => {
    const filteredProducts = []
    products?.products?.map((e) => {
      if (arrayOfFilters.includes(e.category)) filteredProducts.push(e)
    })
    return filteredProducts
  }

  return (
    <Layout>
      <section className='home-section mt-5' onClick={()=>setShowCart(false)}>
        {categoriesClassification.map((e) => (
          <CarouselProducts
            categories={Object.keys(e)}
            data={filterByCategories(Object.values(e)[0])}
            key={Object.keys(e)}
          />
        ))}
      </section>

      <Modal show={!!showCart} onHide={()=>setShowCart()} animation={false}>
        <Modal.Header>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </Layout>
  )
}
