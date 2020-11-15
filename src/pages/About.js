import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>About</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>このサイトは、2020年度 岡山県立倉敷工業高等学校 ラグビー部 杉野チーム 卒部記念の特設サイトです。</p>
                    <p>写真は、宗岡さん、宍戸さん、岡山県ラグビー写真倶楽部さん、有木より提供いただきました。動画撮影、サイト制作は有木が担当しました。このサイトは、<a href="https://www.netlify.com/" target="_blank">Netlify</a>にて無料で運営しております。</p>
                    <p></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
