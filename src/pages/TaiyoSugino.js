import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerTaiyoSugino'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic12 from '../assets/images/pic12.jpg'
import pic13 from '../assets/images/pic13.jpg'
import pic14 from '../assets/images/pic14.jpg'
import pic15 from '../assets/images/pic15.jpg'
import pic16 from '../assets/images/pic16.jpg'
import pic17 from '../assets/images/pic17.jpg'
import pic18 from '../assets/images/pic18.jpg'
import pic19 from '../assets/images/pic19.jpg'
import pic20 from '../assets/images/pic20.jpg'
import pic21 from '../assets/images/pic21.jpg'
import pic22 from '../assets/images/pic22.jpg'
import pic23 from '../assets/images/pic23.jpg'
import pic24 from '../assets/images/pic24.jpg'
import pic25 from '../assets/images/pic25.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Taiyo Sugino</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Sed amet aliquam</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
            </section>

            <div className="box alt">
                <div className="grid-wrapper">
                    <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic04} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic05} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic13} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic04} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic05} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic13} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span></div>
                </div>
            </div>

        </div>

    </Layout>
)

export default Landing
