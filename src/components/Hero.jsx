export default function Hero() {
  return (
    <main className="hero container">
      <div className="main">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button className="shop">Shop Now</button>
          <button className="category">Category</button>
        </div>
        <div className="logo-shop">
          <p>Also Available On</p>
          <div className="brand-logo">
            <img src="images/flipkart.png" alt="flipkart" />
            <img src="images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="right">
        <img src="images/hero-image.png" alt="hero-img" />
      </div>
    </main>
  );
}
