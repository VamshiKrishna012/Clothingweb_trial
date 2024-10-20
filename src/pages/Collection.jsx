import React from 'react'

export default function Collection() {
  return (
    <div>
      <div className="collection">
        <div className="filters-section">
          <h2>Filters</h2>
          <div className="filter-category filter-block">
            <h5>CATEGORIES</h5>
            <input type="checkbox" /> Men <br />
            <input type="checkbox" /> Women <br />
            <input type="checkbox" /> Kids 
          </div>
          <div className="filter-type filter-block">
            <h5>TYPE</h5>
            <input type="checkbox" /> Topwear <br />
            <input type="checkbox" /> Bottomwear <br />
            <input type="checkbox" /> Winterwear
          </div>
        </div>
        <div className="collection-section">
          <div className="collection-headings">
            <div><h2>All <span className='choose-span'>Collections</span></h2></div>
            <div>
              <select name="selectedCollection" className='select-collection'>
                <option value="relevant">Sort by: Relevant</option>
                <option value="lowtohigh">Sort by: Low to High</option>
                <option value="hightolow">Sort by: High to Low</option>
              </select>
            </div>
          </div>

          <div className="all-collections">
            <div className='collection-card'>
              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRebTChZyMfmjyP9imbxFQqINLYzSWG4xMNhes2KBGYiyDmWvAfGWZQIDqFQ3tQaagkVdPqLZFThL8U6_GG7U8cGBFamN3rD4e4d0dzTg7FeTivLZ7laBFy" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img8.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img14.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img35.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img15.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img6.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img51.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img39.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img36.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img28.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img26.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img21.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img34.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
            <div className='collection-card'>
              <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img18.png" alt={name} className='product-image' />
              <p>Lorem ipsum</p>
              <p>$48</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
