import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerMisakiMuneoka'

import muneoka_01 from '../assets/images/MisakiMuneoka/muneoka_01.jpg'
import muneoka_02 from '../assets/images/MisakiMuneoka/muneoka_02.jpg'
import muneoka_03 from '../assets/images/MisakiMuneoka/muneoka_03.jpg'
import muneoka_04 from '../assets/images/MisakiMuneoka/muneoka_04.jpg'
import muneoka_05 from '../assets/images/MisakiMuneoka/muneoka_05.jpg'
import muneoka_06 from '../assets/images/MisakiMuneoka/muneoka_06.jpg'
import muneoka_07 from '../assets/images/MisakiMuneoka/muneoka_07.jpg'
import muneoka_08 from '../assets/images/MisakiMuneoka/muneoka_08.jpg'
import muneoka_09 from '../assets/images/MisakiMuneoka/muneoka_09.jpg'
import muneoka_10 from '../assets/images/MisakiMuneoka/muneoka_10.jpg'
import muneoka_11 from '../assets/images/MisakiMuneoka/muneoka_11.jpg'
import muneoka_12 from '../assets/images/MisakiMuneoka/muneoka_12.jpg'
import muneoka_13 from '../assets/images/MisakiMuneoka/muneoka_13.jpg'
import muneoka_14 from '../assets/images/MisakiMuneoka/muneoka_14.jpg'
import muneoka_15 from '../assets/images/MisakiMuneoka/muneoka_15.jpg'
import muneoka_16 from '../assets/images/MisakiMuneoka/muneoka_16.jpg'
import muneoka_17 from '../assets/images/MisakiMuneoka/muneoka_17.jpg'
import muneoka_18 from '../assets/images/MisakiMuneoka/muneoka_18.jpg'
import muneoka_19 from '../assets/images/MisakiMuneoka/muneoka_19.jpg'
import muneoka_20 from '../assets/images/MisakiMuneoka/muneoka_20.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Misaki Muneoka</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">

            <div className="box alt">
                <div className="grid-wrapper">
                    <div className="col-4"><span className="image fit"><img src={muneoka_01} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_02} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_03} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_04} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_05} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_06} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_07} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_08} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_09} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_10} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_11} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_12} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_13} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_14} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_15} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_16} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_17} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_18} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_19} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={muneoka_20} alt="" /></span></div>

                </div>
            </div>

        </div>

    </Layout>
)

export default Landing
