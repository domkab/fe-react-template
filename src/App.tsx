import './App.scss'
import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

console.log('Environment VITE_PUBLIC_URL:', import.meta.env.VITE_PUBLIC_URL);

const HomeFashionSix = lazy(() => import("./pages/HomeFashionSix"));
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandart"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);

const Product = lazy(() => import("./pages/shop-product/Product"));

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="flone-preloader-wrapper">
              <div className="flone-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          {/* Routes and other components will be rendered here */}
          <Routes>
            <Route
              path={import.meta.env.VITE_PUBLIC_URL}
              element={<HomeFashionSix />}
            />
            {/* shopping grid */}
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/shop-grid-standard"}
              element={<ShopGridStandard />}
            />
            {/* product pages */}
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/product-tab-left/:id"}
              element={<ProductTabLeft />}
            />
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/product/:id"}
              element={<Product />}
            />
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/cart"}
              element={<Cart />}
            />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App
