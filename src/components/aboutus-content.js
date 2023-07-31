import './aboutus-content.css'

function aboutusContent() {
    return (
        <main className="aboutUsMain">
            <section className='bg-abus'>
                <div className='container-fluid black-bg'>
                    <div className='row main-padding'>
                        <div className='col'></div>
                        <div className='col-lg-6'>
                            <h1><b>The Vonchez Inc. Team</b></h1>
                            <hr />
                            <p>We believe in the power of e-commerce to connect people
                                and simplify their lives. Our goal is to offer a wide range of high-quality
                                products, competitive prices, and excellent customer service to ensure your
                                utmost satisfaction.</p>
                        </div>
                        <div className='col'></div>
                    </div>
                </div>
            </section>
            <section className='bw-abus'>
                <div className='container-fluid '>
                    <div className='row box-height'>
                        <div className='col-lg-6 box-black'>
                            <i className="fa-solid fa-people-group web-icon"></i>
                            <h1><b>About Us</b></h1>
                            <p className='au-content'>Welcome to Vonchez Inc., your one-stop destination for
                                all your online shopping needs. We are a dedicated team of passionate individuals
                                who strive to provide you with an exceptional shopping experience.</p>
                        </div>
                        <div className='col-lg-6 box-white'>
                            <i className="fa-regular fa-credit-card web-icon"></i>
                            <h1><b>What We Provide</b></h1>
                            <p className='au-content'>Convenient and Secure Shopping: Our user-friendly website and intuitive
                                interface make browsing and purchasing a breeze. We prioritize the security of your
                                personal information and offer secure payment gateways to safeguard your transactions.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bw-abus'>
                <div className='container-fluid'>
                    <div className='row box-height'>
                        <div className='col-lg-6 box-white'>
                            <i className="fa-solid fa-user-tie web-icon"></i>
                            <h1><b>A Dedicated Team of Experts</b></h1>
                            <p className='au-content'>
                                At Vonchez Inc., we have assembled a team of dedicated
                                professionals who bring extensive knowledge and expertise
                                in the e-commerce industry. Our team members are highly skilled
                                in their respective fields, ranging from web development and
                                esign to marketing and customer service. We work collaboratively,
                                combining our diverse talents to create a seamless and enjoyable
                                online shopping platform.
                            </p>
                        </div>
                        <div className='col-lg-6 box-black'>
                            <i className="fa-regular fa-heart web-icon"></i>
                            <h1><b>Commitment to Quality and Customer Satisfaction</b></h1>
                            <p className='au-content'>
                                We understand the importance of offering top-notch products
                                and services to our valued customers. That's why we go the extra
                                mile to curate a wide range of high-quality products from trusted
                                vendors. Our team meticulously selects each item, ensuring that it
                                meets our rigorous standards before it becomes available on our
                                website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='city-bg'>
                <div className='container-fluid maindiv'>
                    <div className='row main-padding'>
                        <div className='col'></div>
                        <div className='col-lg-7 center-col'>
                            <h1><b>Join Us on this Journey</b></h1>
                            <hr />
                            <p className='au-content'>
                                We invite you to join us on this exciting journey in the world of e-commerce.
                                Discover a vast selection of products, competitive prices, and exceptional
                                service that is tailored to meet your needs. Experience the professionalism
                                and dedication that defines Vonchez Inc. as we strive to make your online
                                shopping experience extraordinary.
                            </p>
                        </div>
                        <div className='col'></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default aboutusContent