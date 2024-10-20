import React from 'react'
import { Carousel } from 'react-bootstrap';
import './Home.css'

export default function Home() {
  return (
    <div>
      <div className="latest-collection">
        <div className='latest-left'>
          <h1>Latest <span>Collection</span></h1>
          <p><a href="#latest">shop now<span></span></a></p>
        </div>
        
        <div className="home-container">
          <Carousel fade interval={3000} pause="hover">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.etsystatic.com/42574827/r/il/a56bf4/6261375915/il_fullxfull.6261375915_kek6.jpg"
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.etsystatic.com/42574827/r/il/7b2858/6213339264/il_1588xN.6213339264_czf9.jpg"
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.etsystatic.com/42574827/r/il/1fe58d/6261375773/il_1588xN.6261375773_hb14.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className='bestsellers'>
        <h1>Best <span>Sellers</span></h1><hr />
        <div className="bs-collections">
        <div className='product-card'>
          <img src="https://i.etsystatic.com/42574827/r/il/1fe58d/6261375773/il_1588xN.6261375773_hb14.jpg" alt={name} className='product-image' />
          <h3>Brand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='product-price'>$48</p>
        </div>
        <div className='product-card'>
          <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRlEZQ8orGG9P9a4O4h06NxqjwUktLbHnTHyVjOHM-KUPDmRuNcYidY0iAQvza97ixW7KmZSx9hyLPXO9Ez8Ov9AlW1d_c93IIYQux27fb0KSdZQJHSmLUX" alt={name} className='product-image' />
          <h3>Brand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='product-price'>$48</p>
        </div>
        <div className='product-card'>
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7wJxkc7HpzudaPe0EORYwkszIcYh4B1M6QUY7PyWk8YL-9AwMIoMei0vAa7y5Zoe-Q47XH3LqT_YSyc69TWqHaF1dXxhz75s7WrYz2El9syaV3-WykDUcxw" alt={name} className='product-image' />
          <h3>Brand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='product-price'>$48</p>
        </div>
        <div className='product-card'>
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcShTMEJT__1jJfa2kkaBN6XvtCzwL5Mz-Pw_E5KtsmWoN44UWg_mwBNACc7hfdJyimNMfVLgFVFp5DoSBGDX_3tBzwBrsyeViIfTCoaUEO-JIR7qIuHIRHe1A" alt={name} className='product-image' />
          <h3>Brand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='product-price'>$48</p>
        </div>
        <div className='product-card'>
          <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQTfuNyUr4aoBdVuVbh0ZLEUSO9p4j5PRt7YwYYSlB8ngjSmzwPUmh0Yg0HdT-V7Ch4fL33w_mQe4fsTA86pNQs6cHK89QphLHTNZe5vZk" alt={name} className='product-image' />
          <h3>Brand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='product-price'>$48</p>
        </div>
        <div className='product-card'>
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSkhZmB1v1XJwZ2sj8KK3Gghjab9q6cuQmBzCvw0HyD2bbilX_UvZ1lLpGCN_Z4bO1BjyZMg0GCbr7vR1HISBE7qVOorPMnQnM9whgYT19a5rhTabe308MnKnNGHYXNt53XAP_QcvY7rGA&usqp=CAc" alt={name} className='product-image' />
          <h3>Brand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='product-price'>$48</p>
        </div>
        </div><br /><br /> <hr />
      </div>

      <div className="latest-collection-slide" id='latest'>
        <h1>Latest <span>Collection</span></h1><hr />
        <div className="bs-collections">
        <div className='product-card'>
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSDrPwGmVCiMvzRpZSW0Tt21ViVVcGbkRQlTc_3CHVW45MO86vAeZUgbVvDkJySXdSbu0wSONVYuiPf-a7tAEnwwu1275JfEBKzy56vfIf7VQWjNVOYKPrtbg&usqp=CAc" alt={name} className='product-image' />
          <h3>Brand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='product-price'>$48</p>
        </div>
        <div className='product-card'>
          <img src="https://i.etsystatic.com/42574827/r/il/7b2858/6213339264/il_1588xN.6213339264_czf9.jpg" alt={name} className='product-image' />
          <h3>Brand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='product-price'>$48</p>
        </div>
        <div className='product-card'>
          <img src="https://i.etsystatic.com/42574827/r/il/a56bf4/6261375915/il_fullxfull.6261375915_kek6.jpg" alt={name} className='product-image' />
          <h3>Brand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='product-price'>$48</p>
        </div>
        <div className='product-card'>
          <img src="https://i.etsystatic.com/42574827/r/il/1fe58d/6261375773/il_1588xN.6261375773_hb14.jpg" alt={name} className='product-image' />
          <h3>Brand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='product-price'>$48</p>
        </div>
        <div className='product-card'>
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTfZZZbnuBUh9b4aLwxS6Hw6Q3gM_eWTlepHqm7gb4pIH8hbEDMUcs4h6zdyrRfID0ZGZ7VDi5abLAL48ix6OBqRow8d0uB" alt={name} className='product-image' />
          <h3>Brand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='product-price'>$48</p>
        </div>
        <div className='product-card'>
          <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRebTChZyMfmjyP9imbxFQqINLYzSWG4xMNhes2KBGYiyDmWvAfGWZQIDqFQ3tQaagkVdPqLZFThL8U6_GG7U8cGBFamN3rD4e4d0dzTg7FeTivLZ7laBFy" alt={name} className='product-image' />
          <h3>Brand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='product-price'>$48</p>
        </div>
        </div><br /><br />
      </div>
      

    </div>
  )
}

