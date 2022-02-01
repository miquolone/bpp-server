import { Outlet, Link } from "react-router-dom";
import React from 'react';

function Home() {
  return (
    <>
      <div id="overWallCover">
        <img alt="" src="https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240"/>
      </div>

      <nav className="flex">
        <a href={ "/" }> <img className="logo_img" src="/assets/images/bpp_150_alpha.png" alt={ "" }/> </a>
        <div className={ "link" }>
          |<Link to={ "/" }>HOME </Link>
          |<Link to={ "/SHOP" }>STORE </Link>
          |<Link to={ "/SOCIALS " }>SOCIALS </Link> |
        </div>
      </nav>
      <Outlet/>
    </>
  );
}

export default Home;
