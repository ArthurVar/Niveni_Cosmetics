import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CustomContext = createContext();

function Context(props) {
    
    const [user, setUser] = useState({
        login: ''
    });

    const [cart, setCart] = useState([]);

    const [page, setPage] = useState(1);

    const [status, setStatus] = useState('all');

    const [shop, setShop] = useState([]);

    const [product, setProduct] = useState({});

    const [ticket, setTicket] = useState([]);

    const navigate = useNavigate();

    const getAllCosmetics = () => {
        axios('http://localhost:8080/cosmetics')
            .then(({data}) => setShop(data) )
    };

    const registerUser = (data) => {
        axios.post('http://localhost:8080/register', {...data, orders: []})
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
                navigate('/')
            })
    };

    const loginUser = (data) => {
        axios.post('http://localhost:8080/login', data)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
                navigate('/')
            })
    };

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }

        if (localStorage.getItem('cart') !== null) {
            setCart(JSON.parse(localStorage.getItem('cart')))

        }

        getAllCosmetics()

    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user.orders]);

    const logOutUser = () => {
        if (window.confirm('ты точно хочешь выйти?')) {
            localStorage.removeItem('user');
            localStorage.removeItem('cart');
            setUser({
                login: ''
            })
        } else {
            return ''
        }

    };

    const addCart = (product) => {
        let idx = cart.findIndex(item => item.id === product.id);
        if (idx >= 0) {
            setCart(cart.map(item => {
                if (item.id === product.id) {
                    return {...item, count: +item.count + +product.count}
                } else {
                    return item
                }
            }))
        } else {
            setCart([...cart, product]);
        }
    };

    const updateCart = (id, count) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                return {...item, count: count}
            } else {
                return item
            }
        }))
    };

    const deleteCart = (id) => {
        setCart(cart.filter((item) => {
            return item.id !== id
        }))
    };

    const value = {
        user,
        setUser,
        registerUser,
        logOutUser,
        loginUser,
        page,
        cart,
        setCart,
        addCart,
        deleteCart,
        updateCart,
        ticket,
        product,
        setTicket,
        setProduct,
        setPage,
        setStatus,
        status,
        getAllCosmetics,
        shop
    }


    return( 
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    )
}

export default Context