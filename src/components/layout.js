/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import Form from "./form";
import Logo from "../images/logo-venis-black.svg";
import Icon1 from "../images/icon_1.svg";
import Icon2 from "../images/icon_2.svg";
import Icon3 from "../images/icon_3.svg";

const Layout = ({}) => {
  return (
    <>
      <section className="layout">
        <div className="header">
          <img src={Logo} alt="logo" />
        </div>
        <div className="contentGeneral">
          <div className="contentText">
            <h2>Delay time and show off younger skin</h2>
            <article>
              <img src={Icon1} alt="icon" />
              <p>
                We achieve a visible change, to show a younger skin, fading fine
                lines, wrinkles and age spots.
              </p>
            </article>
            <article>
              <img src={Icon2} alt="icon" />
              <p>
                Our experts will analyze which is the best treatment according
                to the problem you want to treat, giving impressive results.
              </p>
            </article>
            <article>
              <img src={Icon3} alt="icon" />
              <p>
                We guide you in caring for your skin day by day so that you keep
                your face revitalized and full of light.
              </p>
            </article>
          </div>
          <Form />
        </div>
        <Footer />
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
