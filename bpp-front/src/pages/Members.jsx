import { useEffect, useState, useContext } from 'react';
import WakuComponent from '../components/wakuComponent';

import { AirtableContext } from './Home';

const Members = () => {

  const airtableResultExample = useContext( AirtableContext );
  console.log( 'airtableResultExample', airtableResultExample );
  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  useEffect( () => {
    setTimeout( () => {
      setCircleRotateClass( 'gandam-transform' );
    }, 10 );

    window.init_cube_kurukuru( "member" );
    window.particleInit();
  }, [] );

  return (
    <>
      <aside className="circleRotateClassWrap">
        <div className={ circleRotateClassName }/>
        <div className="circleRotateClassWrapInnterText">
          <div className="samePlanets">
            <canvas id="myCanvas">&emsp</canvas>
          </div>
          M.E.M.B.E.R
        </div>
      </aside>

      <div id="particles-js"/>

      <div id={ "main" }>
        <div Style={ "display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;" }>
          {
            airtableResultExample.map( (member, index) => {
              return <WakuComponent key={ index } member={ member.fields }/>;
            } )
          }
        </div>
      </div>
    </>
  );
};

export default Members;
