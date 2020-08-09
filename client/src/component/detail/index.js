import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Axios from 'axios';
import { colors } from '@material-ui/core';
import ReactImageZoom from 'react-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import ReactImageMagnify from 'react-image-magnify';

Detail.propTypes = {

};



function Detail(props) {
    const [product, setProduct] = useState();
    const { id } = props.match.match.params;
    const [size, setSize] = useState('small');
    const [color, setColor] = useState('grey');

    useEffect(() => {
        async function fetchData() {
            const item = await Axios.get(`http://localhost:3000/accessories/${id}`)
                .then(res => { return res.data });
            setProduct(item);
        }
        fetchData();
    }, [id]);

    const handleClassSize = (sizeActive) => {
        if (sizeActive === size) {
            return "detail__size-standard--active"
        }
    }

    const handleSize = (sizeOption) => {
        setSize(sizeOption);
    }

    const hanldeClassColor = (colorsActive) => {
        if (colorsActive === color) {
            return "detail__color-standard--active"
        }
    }
    const hanldeColor = (colorOption) => {
        setColor(colorOption)
    }




    const showProduct = () => {
        if (product) {

            return (
                <div className="row">
                    <div className="col-lg-6 col-xl-6 detail__container">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active detail__next"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" class="detail__next"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2" class="detail__next"></li>
                            </ol>
                            <div class="carousel-inner detail__carousel">
                                <div class="carousel-item detail__carousel-item active">
                                    <img src={product.image} className="detail__img"></img>
                                </div>
                                <div class="carousel-item detail__carousel-item">
                                    <img src="https://static.lamborghinistore.com/media/catalog/product/cache/1/image/800x1074/9df78eab33525d08d6e5fb8d27136e95/9/0/9013530LLB000_01.jpg" className="detail__img"></img>
                                </div>
                                <div class="carousel-item detail__carousel-item">
                                    <img src="https://static.lamborghinistore.com/media/catalog/product/cache/1/image/800x1074/9df78eab33525d08d6e5fb8d27136e95/9/0/9013442LLB000_01.jpg" className="detail__img"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6  detail__content">
                        <h1 className="detail__name ">{product.name}</h1>
                        <p className="detail__price">${product.price}.<span className="detail__more"> 00</span></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                        <p className="detail__size">Size</p>
                        <div className="detail__size-option">
                            <p
                                className={`detail__size-standard ${handleClassSize('small')}`}
                                onClick={() => handleSize("small")}
                            >Small</p>
                            <p className={`detail__size-standard ${handleClassSize('medium')}`} onClick={() => handleSize("medium")}>Medium</p>
                            <p className={`detail__size-standard ${handleClassSize('large')}`} onClick={() => handleSize("large")}>Large</p>
                        </div>
                        <p className="detail__color detail__size">Color</p>
                        <div className="detail__color-option">
                            <div
                                className={`detail__color-standard detail__color-standard--grey ${hanldeClassColor("grey")}`}
                                onClick={() => hanldeColor("grey")}
                            >
                            </div>
                            <div className={`detail__color-standard detail__color-standard--black ${hanldeClassColor("black")}`}
                                onClick={() => hanldeColor("black")}
                            >
                            </div>
                            <div className={`detail__color-standard detail__color-standard--white ${hanldeClassColor("white")}`}
                                onClick={() => hanldeColor("white")}
                            ></div>
                        </div>
                        <div>
                            <button className="btn detail__btn">Add To Cart</button>
                        </div>

                    </div>
                </div>
            );
        }
    }




    return (
        <div className='detail'>
            <div className="container-fluid detail__main">
                {showProduct()}
            </div>
            <div className="container detail__profile">
                <div className="row detail__row-tab">
                    <ul class="nav nav-pills mb-3 detail__nav" id="pills-tab" role="tablist">
                        <li class="nav-item detail__nav-item">
                            <a class="nav-link active detail__nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Description</a>
                        </li>
                        <li class="nav-item detail__nav-item">
                            <a class="nav-link detail__nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Additional Information</a>
                        </li>
                        <li class="nav-item detail__nav-item">
                            <a class="nav-link detail__nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Reviews</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active detail__title" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. LOLUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. LOLDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. LOLUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. LOLDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="row ">
                                <div className="col-lg-6">
                                    <table class="table text-sm">
                                        <tbody>
                                            <tr>
                                                <th class="text-uppercase font-weight-normal border-0">Product #</th>
                                                <td class="text-muted border-0">Lorem ipsum dolor sit amet</td>
                                            </tr>
                                            <tr>
                                                <th class="text-uppercase font-weight-normal ">Available packaging</th>
                                                <td class="text-muted ">LOLDuis aute irure dolor in reprehenderit</td>
                                            </tr>
                                            <tr>
                                                <th class="text-uppercase font-weight-normal ">Weight</th>
                                                <td class="text-muted ">dolor sit amet</td>
                                            </tr>
                                            <tr>
                                                <th class="text-uppercase font-weight-normal ">Sunt in culpa qui</th>
                                                <td class="text-muted ">Lorem ipsum dolor sit amet</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-lg-6">
                                    <table class="table text-sm">
                                        <tbody>
                                            <tr>
                                                <th class="text-uppercase font-weight-normal border-0">Product #</th>
                                                <td class="text-muted border-0">Lorem ipsum dolor sit amet</td>
                                            </tr>
                                            <tr>
                                                <th class="text-uppercase font-weight-normal ">Available packaging</th>
                                                <td class="text-muted ">LOLDuis aute irure dolor in reprehenderit</td>
                                            </tr>
                                            <tr>
                                                <th class="text-uppercase font-weight-normal ">Weight</th>
                                                <td class="text-muted ">dolor sit amet</td>
                                            </tr>
                                            <tr>
                                                <th class="text-uppercase font-weight-normal ">Sunt in culpa qui</th>
                                                <td class="text-muted ">Lorem ipsum dolor sit amet</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div class="row mb-5">
                                <div class="col-lg-10 col-xl-9">
                                    <div class="media review">
                                        <div class="text-center mr-4 mr-xl-5"><img class="review-image detail__review-img" src="https://d19m59y37dris4.cloudfront.net/sell/1-4/img/person-1.jpg" alt="Han Solo" /><span class="text-uppercase text-muted">Dec 2018</span></div>
                                        <div class="media-body">
                                            <h5 class="mt-2 mb-1">Han Solo</h5>
                                            <div class="mb-2"><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i>
                                            </div>
                                            <p class="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections     </p>
                                        </div>
                                    </div>
                                    <div class="media review">
                                        <div class="text-center mr-4 mr-xl-5"><img class="review-image detail__review-img" src="https://d19m59y37dris4.cloudfront.net/sell/1-4/img/person-2.jpg" alt="Luke Skywalker" /><span class="text-uppercase text-muted">Dec 2018</span></div>
                                        <div class="media-body">
                                            <h5 class="mt-2 mb-1">Luke Skywalker</h5>
                                            <div class="mb-2"><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                                            </div>
                                            <p class="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.     </p>
                                        </div>
                                    </div>
                                    <div class="media review">
                                        <div class="text-center mr-4 mr-xl-5"><img class="review-image detail__review-img" src="https://d19m59y37dris4.cloudfront.net/sell/1-4/img/person-3.jpg" alt="Princess Leia" /><span class="text-uppercase text-muted">Dec 2018</span></div>
                                        <div class="media-body">
                                            <h5 class="mt-2 mb-1">Princess Leia</h5>
                                            <div class="mb-2"><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-gray-200"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                                            </div>
                                            <p class="text-muted">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.     </p>
                                        </div>
                                    </div>
                                    <div class="media review">
                                        <div class="text-center mr-4 mr-xl-5"><img class="review-image detail__review-img" src="https://d19m59y37dris4.cloudfront.net/sell/1-4/img/person-4.jpg" alt="Jabba Hut" /><span class="text-uppercase text-muted">Dec 2018</span></div>
                                        <div class="media-body">
                                            <h5 class="mt-2 mb-1">Jabba Hut</h5>
                                            <div class="mb-2"><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i>
                                            </div>
                                            <p class="text-muted">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.     </p>
                                        </div>
                                    </div>
                                    <div class="py-5 px-3">
                                        <h5 class="text-uppercase mb-4">Leave a review</h5>
                                        <form class="form" id="contact-form" method="post" action="contact.php">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label class="form-label" for="name">Your name *</label>
                                                        <input class="form-control" type="text" name="name" id="name" placeholder="Enter your name" required="required" />
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label class="form-label" for="rating">Your rating *</label>
                                                        <select class="custom-select focus-shadow-0" name="rating" id="rating">
                                                            <option value="5">★★★★★ (5/5)</option>
                                                            <option value="4">★★★★☆ (4/5)</option>
                                                            <option value="3">★★★☆☆ (3/5)</option>
                                                            <option value="2">★★☆☆☆ (2/5)</option>
                                                            <option value="1">★☆☆☆☆ (1/5)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="email">Your email *</label>
                                                <input class="form-control" type="email" name="email" id="email" placeholder="Enter your  email" required="required" />
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="review">Review text *</label>
                                                <textarea class="form-control" rows="4" name="review" id="review" placeholder="Enter your review" required="required"></textarea>
                                            </div>
                                            <button class="btn btn-outline-dark" type="submit">Post review</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;