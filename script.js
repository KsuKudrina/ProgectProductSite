const newData = JSON.parse(data);
const boxEl = document.querySelector('.product__box');
newData.forEach(element => {
    boxEl.insertAdjacentHTML('beforeend', 
        `
        <div class="product__unit">
            <a href="single-page.html" class="product__unit-link">
                <img class="product__img" src="${element.img}" alt="product1"/>
                <div class="product__box-content">
                    <p class="product__box-name">${element.title}</p>
                    <p class="product__box-price">${element.price}</p>
                </div>
            </a>
            <div class="butcard">
                <div class="butcard__addCard">
                <a class="button butcard__button" href="#" id="${element.id}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="27px"
                  height="25px"
                  viewBox="0 0 27 25"
                >
                  <path
                    fill-rule="evenodd"
                    fill="#ffffff"
                    d="M2.850647,3.793457 C2.850647,3.793457 5.2894897,3.793457 5.2894897,3.793457 C5.2894897,3.793457 8.763306,17.035156 8.763306,17.035156 C8.862488,17.423706 9.202759,17.692627 9.585693,17.692627 C9.585693,17.692627 20.26233,17.692627 20.26233,17.692627 C20.602722,17.692627 20.900452,17.48352 21.042175,17.154785 C21.042175,17.154785 24.927246,7.7391357 24.927246,7.7391357 C25.04065,7.454956 25.01233,7.1411133 24.856262,6.887085 C24.700378,6.6330566 24.43097,6.4835205 24.147339,6.4835205 C24.147339,6.4835205 12.350586,6.4835205 12.350586,6.4835205 C11.882568,6.4835205 11.499817,6.887085 11.499817,7.380371 C11.499817,7.873413 11.882568,8.276978 12.350586,8.276978 C12.350586,8.276978 22.842957,8.276978 22.842957,8.276978 C22.842957,8.276978 19.695312,15.89917 19.695312,15.89917 C19.695312,15.89917 10.223694,15.89917 10.223694,15.89917 C10.223694,15.89917 6.749939,2.6574707 6.749939,2.6574707 C6.650635,2.268921 6.310364,1.9998779 5.9275513,1.9998779 C5.9275513,1.9998779 2.850647,1.9998779 2.850647,1.9998779 C2.3827515,1.9998779 1.999939,2.4034424 1.999939,2.8964844 C1.999939,3.3898926 2.3827515,3.793457 2.850647,3.793457 ZM8.777405,24.0 C9.840881,24.0 10.7057495,23.088135 10.7057495,21.967163 C10.7057495,20.846436 9.840881,19.93457 8.777405,19.93457 C7.7139893,19.93457 6.849121,20.846191 6.849121,21.967163 C6.849121,23.088135 7.7139893,24.0 8.777405,24.0 ZM20.82959,24.0 C20.872131,24.0 20.928772,24.0 20.971313,24.0 C21.481812,23.955078 21.949707,23.716064 22.289917,23.297485 C22.63031,22.89392 22.786255,22.370728 22.757935,21.817871 C22.68695,20.711914 21.765442,19.859863 20.701965,19.93457 C19.63855,20.0094 18.844482,20.995728 18.915344,22.101807 C18.986328,23.162964 19.822876,24.0 20.82959,24.0 Z"
                  />
                </svg>
                <span class="butcard__textCard">Add to Cart</span></a
              >
            </div>
          </div>
        </div>
        `
    )
});

const Add = document.querySelector('.butcard__button'),
      basketEl = document.querySelector('.basket-product');

Add.addEventListener('click', () =>{
  newData.forEach(element => {
    
    basketEl.insertAdjacentHTML('beforeend', 
      `
      <div class="basket-item">
                  <a href="product.html" class="basket-pos">
                    <img class="basket-img" src="${element.img}" alt="product men" />
                    <div class="basket-content">
                      <p class="basket-headline">${element.title}</p>
                      <div class="basket-star">
                        <i class="fa fa-star f123"></i>
                        <i class="fa fa-star f123"></i>
                        <i class="fa fa-star f123"></i>
                        <i class="fa fa-star f123"></i>
                        <i class="fa fa-star-half-o"></i>
                      </div>
                      <p class="basket-cost">1 x ${element.price}</p>
                    </div>
                  </a>
                  <a href="#"
                    ><i class="fa fa-times-circle" aria-hidden="true"></i
                  ></a>
                </div>
      `
    )
  }) 
});
