import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { connect, useSelector } from 'react-redux';
import { getAccessoriesRq, addToCartAccessoriesRq } from '../../redux/action';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import Axios from 'axios';

Index.propTypes = {

};

function Index(props) {
    const [data, setData] = useState([]);
    const name = props.match.match.params.name;
    const [openCategory, setOpenCategory] = useState(false);
    const [sortValue, setSortValue] = useState(0);
    const [range, setRange] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [leave, setLeave] = useState(0);
    const leaveMouse = useRef();

    useEffect(() => {
        props.getAccessories(name);
        setSortValue(0);
        setRange(0);
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [name]);

    const handleClick = e => {
        if (leaveMouse.current && !leaveMouse.current.contains(e.target)) {

            setLeave(0);
        }
    };


    const addToCart = (item) => {
        const data = {
            buyer_id: localStorage.getItem("ID"),
            product_id: item.id,
            product_name: item.name,
            price: item.price,
            product_image: item.image,
            quantity: 1
        };
        const token = localStorage.getItem("token");
        props.addAccessories(data, token);
    }


    const showProducts = () => {
        const products = props.products;
        if (sortValue === 0) {
            return products.filter(item => parseInt(item.price) >= range).map((item, i) => {
                return (
                    <div className="col-xl-3 col-6 col-sm-6 col-md-4 acces__item" key={i}>
                        <div className="acces__item-img">
                            <img src={item.image} className="acces__img"></img>
                        </div>
                        <div className="acces__content">
                            <p className="acces__name">{item.name}</p>
                            <p className="acces__name acces__name--price">USD: {item.price}$</p>
                        </div>
                        <div className="acces__action">
                            <p className="acces__action-add btn acces__action-btn"> <ShoppingCartOutlinedIcon onClick={() => addToCart(item)}></ShoppingCartOutlinedIcon> Add to Cart</p>
                            <Link to={`/detail/${item.id}/${item.name}`} className="acces__action-add btn acces__action-btn"><RemoveRedEyeOutlinedIcon></RemoveRedEyeOutlinedIcon> View detail </Link>
                        </div>
                    </div>
                )
            })
        } else {
            let dataSort = [...products];
            const sorter = [...products].sort((a, b) => {
                switch (parseInt(sortValue)) {
                    case 1:
                        return a.name.localeCompare(b.name);
                    case 2:
                        return b.name.localeCompare(a.name);
                    case 3:
                        return a.price - b.price;
                    case 4:
                        return b.price - a.price;

                }

            });
            dataSort = [...sorter];
            return dataSort.filter(item => parseInt(item.price) >= range).map((item, i) => {
                return (
                    <div className="col-xl-3 col-6 col-sm-6 col-md-4 acces__item" key={i}>
                        <div className="acces__item-img">
                            <img src={item.image} className="acces__img"></img>
                        </div>
                        <div className="acces__content">
                            <p className="acces__name">{item.name}</p>
                            <p className="acces__name acces__name--price">USD: {item.price}$</p>
                        </div>
                        <div className="acces__action">
                            <p className="acces__action-add btn acces__action-btn"><ShoppingCartOutlinedIcon onClick={() => addToCart(item)}></ShoppingCartOutlinedIcon> Add to Cart</p>
                            <Link to={`/detail/${item.id}/${item.name}`} className="acces__action-add btn acces__action-btn"><RemoveRedEyeOutlinedIcon></RemoveRedEyeOutlinedIcon> View detail </Link>
                        </div>
                    </div>
                )
            })
        }
    }


    const showCategory = () => {
        if (openCategory === true) {
            return "acces__category--show"
        } else {
            return "acces__category--hide"
        }
    }

    const showCategoryAc = () => {
        setOpenCategory(true);
    }
    const hideCategoryAc = () => {
        setOpenCategory(false);
    }

    const sortChange = (e) => {
        setSortValue(e.target.value);
    }

    const handleRangePrice = (e) => {

        setRange(e.target.value);
    }

    const minRanger = () => {
        const products = props.products;
        if (products.length > 0) {
            const arr = products.map(item => item.price);
            const minRange = Math.min.apply(null, arr);
            return minRange;
        }

    }

    const maxRanger = () => {
        const products = props.products;
        if (products.length > 0) {
            const arr = products.map(item => item.price);
            return Math.max.apply(null, arr);
        }
    }

    const onHandleName = (e) => {
        setSortValue(e.target.value);
    }
    const setCheked = (i) => {
        if (i === parseInt(sortValue)) {
            return true;
        } else {
            return false;
        }
    }

    const searchChange = (e) => {
        setSearchValue(e.target.value);
        setLeave(1);
        Axios.get(`http://localhost:3000/accessories?type=${name}&name_like=${e.target.value}`)
            .then(res => {
                console.log(res.data);
                setSearchResult(res.data);
            })
            .catch(err => {
                console.log(err.data)
            })
    }


    const classSearch = () => {
        if (leave === 1) {
            return "acces__search-result--show"
        } else {
            return "acces__search-result--hide"
        }
    }

    const showSearchResult = () => {
        if (searchResult.length < 1) {
            return <p>không có kết quả</p>
        } else {
            return searchResult.map((item, i) => {
                return (
                    <>
                        <img className="acces__search-img" src={item.image}></img>
                        <p className="acces__search-name">{item.name}</p>
                    </>
                )
            })
        }

    }

    return (
        <div className="acces">
            <div className="acces__products row">
                <div className="acces__option col-xl-3">
                    <div>
                        <h2 className="acces__option-title">category</h2>
                        <div className="acces__option-list">
                            <Link className="acces__link" to="/accessories/clother"><div class="home__model-control acces__icon"><i class="fa fa-chevron-right home__model-icon acces__icon-show" aria-hidden="true"></i></div>Clother</Link>
                            <Link className="acces__link" to="/accessories/shoes"><div class="home__model-control acces__icon"><i class="fa fa-chevron-right home__model-icon acces__icon-show" aria-hidden="true"></i></div>SHOES</Link>
                            <Link className="acces__link" to="/accessories/hat"><div class="home__model-control acces__icon"><i class="fa fa-chevron-right home__model-icon acces__icon-show" aria-hidden="true"></i></div>Hat</Link>
                            <Link className="acces__link" to="/accessories/wallet"><div class="home__model-control acces__icon"><i class="fa fa-chevron-right home__model-icon acces__icon-show" aria-hidden="true"></i></div>wallet</Link>
                            <Link className="acces__link" to="/accessories/belt"><div class="home__model-control acces__icon"><i class="fa fa-chevron-right home__model-icon acces__icon-show" aria-hidden="true"></i></div>belt</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="acces__sort acces__sort--price">
                                <p className="acces__fitler-name">Price</p>
                                <input type="range" min={minRanger()} max={maxRanger()} onChange={handleRangePrice} value={range === 0 ? minRanger() : range}></input>
                                <p className="acces__fitler-price">{range === 0 ? minRanger() : range} $</p>
                            </div>
                            <div className="acces__sort">
                                <p className="acces__fitler-name acces__fitler-name--sort">Name</p>
                                <div className="acces__fitler">
                                    <input type="checkbox" checked={setCheked(1)} onChange={onHandleName} value={1} placeholder="A -Z"></input>
                                    <p >Name(Ascending)</p>
                                </div>
                                <div className="acces__fitler">
                                    <input onChange={onHandleName} checked={setCheked(2)} type="checkbox" value={2} placeholder="A -Z"></input>
                                    <p >Name(Descending)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="acces__list col-xl-9">
                    <p className="title-second acces__title">{name}</p>
                    <div className="acces__search">
                        <input
                            className="acces__input"
                            placeholder={`search ${name}`}
                            onChange={searchChange}
                            value={searchValue}
                            ref={leaveMouse}
                        ></input>
                        <div className={`acces__search-result ${classSearch()}`}>
                            {showSearchResult()}
                        </div>
                    </div>
                    <div className="acces__fliter_screenS">
                        <div className="acces__header">
                            <p className="acces__header-filter" onClick={showCategoryAc}>Choose another category</p>
                            <form>
                                <select className="acces__header-filter" onChange={sortChange}>
                                    <option value={0}>Sort By</option>
                                    <option value={1}>Name(Ascending)</option>
                                    <option value={2}>Name(Descending)</option>
                                    <option value={3}>Price(Ascending)</option>
                                    <option value={4}>Price(Descending)</option>
                                </select>
                            </form>
                        </div>
                        <div className={`acces__category ${showCategory()}`}>
                            <i class="fa fa-times-circle acces__category-icon" onClick={hideCategoryAc} aria-hidden="true"></i>
                            <Link to="/accessories/clother" onClick={hideCategoryAc}>Clother</Link>
                            <Link to="/accessories/shoes" onClick={hideCategoryAc}>Shoes</Link>
                            <Link to="/accessories/hat" onClick={hideCategoryAc}>Hat</Link>
                            <Link to="/accessories/wallet" onClick={hideCategoryAc}>Wallet</Link>
                            <Link to="/accessories/belt" onClick={hideCategoryAc}>Belt</Link>
                        </div>
                    </div>
                    <div className="row acces__list-item" >
                        {showProducts()}
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.accessories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAccessories: (name) => {
            dispatch(getAccessoriesRq(name))
        },
        addAccessories: (data, token) => {
            dispatch(addToCartAccessoriesRq(data, token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);