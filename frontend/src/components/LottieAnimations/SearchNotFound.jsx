import React from "react";
import Lottie from 'react-lottie'

import SearchNotFoundJson from '../../assets/lottie/search-not-found.json'

export const SearchNotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: SearchNotFoundJson
    }

    return <Lottie options={defaultOptions} width={250} height={250} />
}