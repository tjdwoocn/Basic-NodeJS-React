import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {

    // 옵션의 종류
    // null: 아무나 출입이 가능한 페이지
    // true: 로그인한 유저만 출입이 가능한 페이지
    // flase: 로그인한 유저는 출입 불가능한 페이지
    function AuthenticationCheck(props) {
        
        const dispatch = useDispatch();
        
        React.useEffect( () => {
            
            dispatch(auth()).then(response => {
                
            })

        }, [])
    }






    return AuthenticationCheck
}