import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import MainIcons from '../../components/MainIcons/MainIcons'
import AdBox from '../../components/HomePage/AdBox/AdBox'
import HomeBanner from '../../components/Banners/HomeBanner/HomeBanner'
import HomeCategories from '../../components/HomeCategories/HomeCategories'

function Home() {

    return (
        <div className='col-12 px-0'>
            {/* <HomeBanner /> */}
            <MainIcons />
            <HomeCategories />
            <AdBox />
        </div>
    )
}

export default Home
