import React from "react";
import Root from "../components/Tabs";
import Footer from "../components/Footer";

import FortyYearsLogo from "../assets/images/branding/logo_40years.png";

const IndexPage = () => (
  <div>
    <header className="small-section intro-hero">
      <div className="intro-section">
        <h2>
          <small>R&S SUPPLY</small>
          Your Full Service Roofing
          <br /> <span>&</span> Building Materials Supplier
        </h2>
      </div>
    </header>
    <section className="intro-section intro-section__bg">
      <div className="intro-section__content">
        <aside>
          <div className="our-info">
            <div className="our-info__wrap">
              <img alt="" src={FortyYearsLogo} />
            </div>
            <h2>
              Over 40 Years of <br />
              Experience
            </h2>
            <p>
              Helping people find the
              <br /> best solutions.
            </p>
          </div>
        </aside>

        <article>
          <h2 className="title">Our Journey</h2>
          <p>
            R & S Supply is a wholesale supplier of building supplies catering
            to the professional contractor. Started in 1977 by Alan Shufelberger
            the chain began with their first store in Redding, CA. In 1983, the
            first store in the chain was added in Sacramento, CA. With that
            addition, the name was changed to R&S Supply to recognize Redding
            and Sacramento. That name has been used for all the additional
            stores in the chain since then.
          </p>
          <p>
            In 1991 a store was added in Eureka, CA with the Grover Beach, CA
            location being added the following year in 1992. In 1995, two stores
            were added in Medford, OR and Reno, NV, bringing the total stores to
            five. In 1998 two additional stores were added in Boise, ID and Twin
            Falls, ID. Beginning in 2000 a new store was added each year,
            Castroville, CA – 2000, Fresno, CA – 2001, Billings, MT – 2002,
            Idaho Falls, ID – 2003, Missoula, MT – 2004, and Chico, CA in 2005.
            After a 5 Year hiatus from growth, R&S Supply added a new store in
            Bozeman, MT in 2010.
          </p>
          <p>
            When Malarkey Roofing Products built a new plant in Oklahoma City,
            R&S Supply opened stores in Oklahoma City and Tulsa, OK in 2012 to
            support their expansion efforts. In 2014 an additional store was
            added in Wichita Falls, TX to support this effort, as well as
            additional stores in Las Vegas, NV and Lake Havasu City, AZ in 2014
            as well. 2016 brought 4 additional stores in Kingman & Flagstaff,
            AZ, Decatur, TX and Elko, NV. A location in Great Falls, MT was
            added in 2017 making it the newest store in the chain. Additional
            store openings are planned for 2018.
          </p>
          <p>
            Mr. Shufelberger and his team have grown their business with a focus
            on the fundamentals, and maintaining the principals that “Customer
            Service Still Matters”. The company focuses on supplying building
            materials to the professional contractor. The main area of focus for
            each store is the wholesale roofing supply. Most stores add other
            building materials into their mix such as drywall, stucco, cement
            products, lumber, etc. Most deliveries are made to the jobsite, but
            there is a small segment of “cash and carry” business in each store.
          </p>
          <p>
            With the constant consolidation in the roofing supply industry over
            the past 10 years, R&S Supply has remained focused on their core
            principals of “Customer Service Still Matters”, while their
            competitors focus on the Wal-Mart approach for the supply business.
            The company is wholly owned by Mr. Shufelberger, and the corporate
            headquarters are in Redding, California where Mr. Shufelberger
            resides.
          </p>
        </article>
      </div>
    </section>
    <section className="stores-section">
      <div className="container">
        <div className="stores-section__content page-section">
          <Root />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default IndexPage;
