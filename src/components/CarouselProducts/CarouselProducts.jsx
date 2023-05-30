import Carousel from "../Carousel/carousel.jsx"
import { ProductCard } from "../ProductCard/ProductCard"
import "./styles.scss"
import { BREAKPOINTS, useMediaQuery } from "../../hooks/useMediaQuery"

export const CarouselProducts = ({ categories, data }) => {
  const isMobile = useMediaQuery(BREAKPOINTS.MOBILE)
  const isTablet = useMediaQuery(BREAKPOINTS.TABLET)
  const isDesktop = useMediaQuery(BREAKPOINTS.DESKTOP)
  const isLARGEDESKTOP = useMediaQuery(BREAKPOINTS.LARGE_DESKTOP)



  return (
    <section className="carousel-section">
      <div className="container">
        <div className="ml-3 row">
          <a
            className="d-flex align-items-end categories-title"
            href={`products/category/${categories}`}
          >
            {categories}
          </a>
        </div>

        <div className="carousel-pre-container">
          <Carousel show={!isMobile ? 1 : !isTablet ? 2 : isDesktop ? 4 : !isLARGEDESKTOP ? 3 : 1} infiniteloop={true} autoPlay={true}>
            {data.map((product) => {
              return <ProductCard key={product.id} product={product} />
            })}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
