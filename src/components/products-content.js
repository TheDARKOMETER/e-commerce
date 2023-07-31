import './products-content.css'
import HttpService from '../services/https-service';
import { useEffect, useState } from 'react';
import ProductComponent from '../components/product-component'


const http = new HttpService();
function ProductsContent() {
    const [productState, setProduct] = useState({ products: [] });

    useEffect(() => {
        loadData();
        console.log(productState);
    }, []);

    const loadData = () => {
        http.getProducts().then(data => {
            console.log(data)
            setProduct({ products: data });
        }).catch(err => {
            console.log("Error, could not load products", err);
        })
    }

    const productList = () => {
        const list = productState.products.map((product) => {
            return (
                <div className='col-sm-2' key={product._id}>
                    <ProductComponent product={product} />
                </div>
            )
        })
        return list
    }
    return (
        <main className='productsMain'>
            <div className='container-fluid'>
                <section className='product-listings'>
                    <div className='row'>
                        <div className='col'></div>
                        <div className='col-9'>
                            <h1>Our Products</h1>
                            <hr></hr>
                        </div>
                        <div className='col'></div>
                    </div>
                    <div className='row product-list'>
                        <div className='col-12'>
                            <div className='row center-cards'>
                                {productList()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default ProductsContent;