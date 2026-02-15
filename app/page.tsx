export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="badge">Agentie de web design din Romania</span>
          <h1>Construim <span className="gradient">prezenta digitala</span> a afacerii tale</h1>
          <p>Site-uri web profesionale, gazduire sigura, domenii si SEO. Tot ce ai nevoie pentru succes online.</p>
          <div className="cta">
            <a className="btn primary">Vezi servicii</a>
            <a className="btn ghost">Contacteaza-ne</a>
          </div>

          <div className="stats">
            <div><strong>150+</strong><span>Proiecte livrate</span></div>
            <div><strong>98%</strong><span>Clienti multumiti</span></div>
            <div><strong>5+</strong><span>Ani experienta</span></div>
            <div><strong>24/7</strong><span>Suport tehnic</span></div>
          </div>
        </div>
      </section>

      <section className="services container">
        <h2>Tot ce ai nevoie pentru online</h2>
        <div className="grid">
          <div className="card">
            <h3>Web Design</h3>
            <p>Site-uri moderne si optimizate pentru conversii.</p>
          </div>
          <div className="card">
            <h3>Gazduire Web</h3>
            <p>Hosting rapid si sigur pentru afacerea ta.</p>
          </div>
          <div className="card">
            <h3>Domenii</h3>
            <p>Inregistreaza-ti brandul online rapid.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container about-grid">
          <div>
            <h2>Partenerul tau de incredere pentru digital</h2>
            <p>Cu peste 5 ani de experienta si sute de proiecte finalizate, livram rezultate rapide si design premium.</p>
            <ul>
              <li>Livrare rapida</li>
              <li>Securitate maxima</li>
              <li>Suport dedicat</li>
            </ul>
          </div>
          <div className="about-img"></div>
        </div>
      </section>

      <section className="cta-final">
        <div className="container center">
          <h2>Pregatit sa incepem?</h2>
          <p>Contacteaza-ne pentru o oferta gratuita.</p>
          <a className="btn primary">Solicita oferta</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h4>BeezPixel</h4>
            <p>Agentie web design si solutii digitale.</p>
          </div>
          <div>
            <h5>Servicii</h5>
            <p>Web Design</p>
            <p>Gazduire</p>
            <p>SEO</p>
          </div>
          <div>
            <h5>Contact</h5>
            <p>contact@beezpixel.ro</p>
            <p>Bucuresti, Romania</p>
          </div>
        </div>
        <div className="copy">© {new Date().getFullYear()} Beez Pixel</div>
      </footer>
    </main>
  );
}
