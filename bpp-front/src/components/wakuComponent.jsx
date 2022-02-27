const WakuComponent = () => {
  return (
    <>
      <div Style={
        "background: url(/assets/svg/waku.svg) no-repeat;\n" +
        "height: 186px;\n" +
        "width: 326px;"
      }>
        <div Style={ "height:38%; background:#777a; display:flex;" }>
          <div Style={ "width:25%; background:#872a;" }>
            <img Style={ "background:#fff; width:60px; margin:10px;border-radius:2rem;" } src={ '/assets/images/ume.webp' }/></div>
          <div
            Style={ "width:75%; padding:17px 40px 13px; color:#eee; font-size:0.9rem;background:#d723;word-break:break-all;line-height:1rem;" }>BBBBBBBBBBBBBBBBBBBBB
          </div>
        </div>
        <div Style={ "height:62%; background:#777a" }>
          <p
            Style={ "margin:0 auto;max-height:3rem;overflow:hidden;padding:12px; color:#eee; font-size:0.9rem;background:#d723;word-break:break-all;line-height:1.3rem;" }>BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</p>
        </div>
      </div>
    </>
  );
};

export default WakuComponent;