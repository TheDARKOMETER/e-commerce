import './main-content.css'

function MainContent() {
    return (
        <main className='homeMain'>
            <section className='darkspace'>
                <div className='container-fluid maindiv'>
                    <div className='row main-padding'>
                        <div className='col'></div>
                        <div className='col-8 center-col'>
                            <hr></hr>
                            <div className='topPart'>
                                <h1 className='intro'>Buy Our Amazing Products</h1>
                            </div>
                            <div>
                                <p>We're one of the biggest retailers in Southeast Asia.
                                    We are commited to 100% customer satisfaction at all costs.
                                    All our products are ethically sourced, cruelty free, and 100% original.
                                </p>
                            </div>
                            <hr></hr>
                            <div className='bottomPart'>
                                <h2>Experience a new level of retail experience!</h2>
                                <button className='btn my-dark' id='shopNow'>
                                    <a href='/products'>Shop Now!</a>
                                </button>
                            </div>
                        </div>
                        <div className='col'></div>
                    </div>
                </div>
            </section>
            <section className='whitespace'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'></div>
                        <div className='col-sm-5'>
                            <h1 className='dollar'>$</h1>
                            {/* <img src='http://127.0.0.1:8080/white-section-min.png' className='img-fluid logo-img' alt='An Image'></img> */}
                            <h2>Shop with Savings in Mind.</h2>
                            <hr className='margin-hr'></hr>
                            <div>
                                Looking for the best value for your money? Look no further than our website! Here, we pride
                                ourselves on providing the highest quality products and services at unbeatable prices. From
                                top-of-the-line electronics to stylish and affordable clothing, we have everything you need
                                to get the most out of your hard-earned money. Our team of expert buyers scours the market
                                to find the best deals and pass the savings on to you. So why wait? Start browsing today and
                                discover the incredible value waiting for you on our website!
                            </div>
                        </div>
                        <div className='col'></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MainContent