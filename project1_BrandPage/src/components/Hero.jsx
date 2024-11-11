const HeroSection = () =>{

    return <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure totam maxime, tempore magni accusantium quis vel dolorem exercitationem sapiente id!
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button>Category</button>
            </div>

            <div className="shopping">
                <p>Also available on</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="amazon-logo" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/shoe_image.png" alt="hero-image" />
        </div>

    </main>

}


export default HeroSection