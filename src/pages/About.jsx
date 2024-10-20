import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='about-title'>About <span>Us</span></h1>
      <div className="about">
        <div className="about-content">
          <div className="about-content-left">
            <img src="https://foreverbuy.in/assets/about_img-BAJyTXw9.png" alt="fashion-image" />
          </div>
          <div className="about-content-right">
            <p>Fashion was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
            <br />
            <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
            <br />
            <h5>Our Misson</h5><br />
            <p>Our mission at Fashion is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
        </div>
        <div className="about-choose">
          <h4>Why <span className='choose-span'>Choose Us</span></h4><br />
          <div className="about-choose-contents">
          <div className='about-choose-content'>
            <h6>Quality Assurance:</h6><br />
            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='about-choose-content'>
            <h6>Convenience:</h6><br />
            <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='about-choose-content'>
            <h6>Exceptional Customer Service:</h6><br />
            <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
