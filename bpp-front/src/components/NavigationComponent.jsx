import { useState } from 'react';

const NavigationComponent = () => {
  const [ select, setSelect ] = useState( false );

  const style = {
    border: "3px solid #fff",
    position: "fixed",
    zIndex: "2938",
    bottom: "3rem",
    borderRadius: "2rem",
    width: "50px",
    height: "50px",
    transform: select ? "rotate( 226deg )" : "rotate( 36deg )",
    justifyContent: "center",
    display: "flex"
  };

  return (
    <>
      { select }
      <div style={ style }>
        {
          select ?
            <div className="wakusei">
              <p className={ "nn1" } href="#">A</p>
              <p className={ "nn2" } href="#">B</p>
              <p className={ "nn3" } href="#">C</p>
            </div>
            :
            <>
            </>
        }
        <div onClick={ event => setSelect( !select ) }>
          <img src="/assets/svg/arrow_down.svg" width="30" alt={ "" }/>
        </div>
      </div>
    </>
  );
};

export default NavigationComponent;