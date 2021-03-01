import React, {Component} from "react";
import './About.css';
import '../../App.scss';
import aboutImg from "../../img/catriges/laser(original)14.png";
import $ from "jquery"; 

class About extends Component{
    
    render(){
      return (
        <section className="about" id="about">
            <h2 className="subtitle">Haqqımızda</h2>
            <div className="under-line"></div>
            <div className="about-center">
                <article className="about-img">
                <img
                    src={aboutImg}
                    className="about-photo"
                    alt="about"
                />
                </article>
                <article className="about-info">
                <p>
                Kainat Print şirkəti ölkədə ən geniş şəbəkəsi olan şirkətlərindən 
                biridir. Şirkət 2005-ci ildə təsis olunmuşdur. Şirkətimiz müxtəlif 
                növ katriclərin satışı, dolumu və s xidmətləri ilə fəaliyyətdədir. 
                Peşəkar komandamızın olması və peşəkar xidmətləri təqdim etməklə ölkədə böyük müəssisələrlə uzunmüddətli əməkdaşlıq müqavilələrinə sahibik.
                </p>
                <p>
                Kainat Print şirkəti hər zaman yeliklərə üstünlük verib və bu 
                sahəsində innovativ yeniliklərə imza atır. Şirkətin texnoloji 
                bazası və personalı ən son standartlara uyğun formalaşmışdır.
                </p>
                <a href="https://unisel.az/" target='_balnk' className="btn-primary">unisel.az</a>
                </article>
            </div>
        </section>
      );
    } 
}

export default About;
