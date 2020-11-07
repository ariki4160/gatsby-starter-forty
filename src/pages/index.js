import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

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


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Kurako Rugby 2020"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Taiyo Sugino</h3>
                                <p>captain Standoff</p>
                            </header>
                            <Link to="/TaiyoSugino" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Taiki Fujii</h3>
                                <p>vice captain number 8</p>
                            </header>
                            <Link to="/TaikiFujii" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Ruu Akashi</h3>
                                <p>Prop</p>
                            </header>
                            <Link to="/RuuAkashi" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Ryo Kawagoe</h3>
                                <p>Hooker</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Sho Inada</h3>
                                <p>Prop</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Rikuto Niimura</h3>
                                <p>Lock</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic12})`}}>
                            <header className="major">
                                <h3>Haruto Shirouchi</h3>
                                <p>Centre</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic13})`}}>
                            <header className="major">
                                <h3>Kizuna Maeda</h3>
                                <p>Prop</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic14})`}}>
                            <header className="major">
                                <h3>Atsuto Okada</h3>
                                <p>Prop</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic15})`}}>
                            <header className="major">
                                <h3>Kensei Hayasaka</h3>
                                <p>Prop</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic16})`}}>
                            <header className="major">
                                <h3>Kouei Tanigawa</h3>
                                <p>Prop</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic17})`}}>
                            <header className="major">
                                <h3>Towa Miyake</h3>
                                <p>Flanker</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic18})`}}>
                            <header className="major">
                                <h3>Rei Hashimoto</h3>
                                <p>Flanker</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic19})`}}>
                            <header className="major">
                                <h3>Reo Hashimoto</h3>
                                <p>Scrum Half</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic20})`}}>
                            <header className="major">
                                <h3>Tomoya Ariki</h3>
                                <p>Centre</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic21})`}}>
                            <header className="major">
                                <h3>Naoto Irie</h3>
                                <p>Wing</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic22})`}}>
                            <header className="major">
                                <h3>Mitsuki Uesugi</h3>
                                <p>Wing</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic23})`}}>
                            <header className="major">
                                <h3>Takeru Shiraishi</h3>
                                <p>Fullback</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic24})`}}>
                            <header className="major">
                                <h3>Misaki Muneoka</h3>
                                <p>Manager</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic25})`}}>
                            <header className="major">
                                <h3>YouTube</h3>
                                <p>Link to YouTube</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
