import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerGroup'

import group_01 from '../assets/images/Group/group_01.jpg'
import group_02 from '../assets/images/Group/group_02.jpg'
import group_03 from '../assets/images/Group/group_03.jpg'
import group_04 from '../assets/images/Group/group_04.jpg'
import group_05 from '../assets/images/Group/group_05.jpg'
import group_06 from '../assets/images/Group/group_06.jpg'
import group_07 from '../assets/images/Group/group_07.jpg'
import group_08 from '../assets/images/Group/group_08.jpg'
import group_09 from '../assets/images/Group/group_09.jpg'
import group_10 from '../assets/images/Group/group_10.jpg'
import group_11 from '../assets/images/Group/group_11.jpg'
import group_12 from '../assets/images/Group/group_12.jpg'
import group_13 from '../assets/images/Group/group_13.jpg'
import group_14 from '../assets/images/Group/group_14.jpg'
import group_15 from '../assets/images/Group/group_15.jpg'
import group_16 from '../assets/images/Group/group_16.jpg'
import group_17 from '../assets/images/Group/group_17.jpg'
import group_18 from '../assets/images/Group/group_18.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Group Photo</title>
            <meta name="description" content="Group Photo" />
        </Helmet>

        <BannerLanding />

        <div id="main">

            <div className="box alt">
                <div className="grid-wrapper">
                    <div className="col-4"><span className="image fit"><img src={group_01} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_02} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_03} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_04} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_05} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_06} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_07} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_08} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_09} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_10} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_11} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_12} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_13} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_14} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_15} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_16} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_17} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={group_18} alt="" /></span></div>

                </div>
            </div>

        </div>

    </Layout>
)

export default Landing
