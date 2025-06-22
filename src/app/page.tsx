import Image from "next/image";
import { BrandLogo, CircleStar, PlayIcon } from "./component/icons";
import Link from "next/link";

export default function Home() {



  return (

    <main className="container">

      <div className="main-grid">

        <div className="content-left">

          <header className="header">

            <div className="logo">
              <BrandLogo />
              <p className="logo-text">Hello World!</p>
            </div>

            <nav className="nav-links">
              <Link href="/course">Course</Link>
              <Link href="/info">Info</Link>
              <Link href="/testimonial">Testimonial</Link>
              <Link href="/categories">Categories</Link>
            </nav>

          </header>


          <div className="content-main">

            <h1>
              <span className="line">LEARN GRAPHICS</span>
              <span className="line">DESIGN FOR LIFE</span>
              <CircleStar />
            </h1>

            <p className="content-summery">
              <span>Stay Informed, Stay Ahead: Unveiling the Future of Technology, Gadgets, and</span>
              <span>Innovation.</span>
              <span> Your Gateway to the Digital Universe - Where Innovation Meets Insight.</span>
            </p>

            <div className="students-info">

              <div className="student-stats">
                <div className="count">5.1 K</div>
                <div className="label">
                  <span>Students All</span>
                  <span> Over World</span>
                </div>
              </div>

              <div className="student-avatars">
                <img className="avatar" src="/icons/students1.png" />
                <img className="avatar" src="/icons/students2.png" />
                <img className="avatar" src="/icons/students3.png" />
              </div>

            </div>

            <div className="action-buttons">
              <button className="btn btn-primary">Book Your Seat</button>
              <button className="btn btn-secondary">
                <PlayIcon /> See Journey
              </button>
            </div>

          </div>

          <footer className="footer">

            <div className="footer-container">

              <div className="stat">
                <div className="number">6409</div>
                <div className="label">Success Story</div>
              </div>

              <div className="stat">
                <div className="number">124</div>
                <div className="label">Expert Instructor</div>
              </div>

              <div className="stat">
                <div className="number">54.749</div>
                <div className="label">Hours Tutored</div>
              </div>

            </div>

          </footer>

        </div>

        <div className="image-grid-container">
          <Image className="image" src="/images/right-img1.png" alt="Colorful abstract graphic design example" width={297} height={297} />
          <Image className="image" src="/images/right-img2.png" alt="Example of modern typography in graphic design" width={297} height={297} />
          <Image className="image" src="/images/right-img3.png" alt="3D rendered character used in design" width={297} height={297} />
          <Image className="image" src="/images/right-img4.png" alt="A professional logo design portfolio piece" width={297} height={297} />
          <Image className="image" src="/images/right-img5.png" alt="Vibrant illustration for a web banner" width={297} height={297} />
          <Image className="image" src="/images/right-img6.png" alt="Abstract geometric pattern design" width={297} height={297} />
        </div>

      </div>

    </main>



  );
}
