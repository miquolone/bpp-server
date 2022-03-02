import { useEffect, useState } from 'react';
import WakuComponent from '../components/wakuComponent';
import { table, minifyRecords } from '../lib/airtable';

const Members = () => {

  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );
  const [ data, setData ] = useState( [] );
  useEffect( () => {
    table.select( {} ).all().then( async records => {
      const minifiedRecords = await minifyRecords( records );
      setData( minifiedRecords );
    } );
  }, [ setData ] );

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

      <header>&emsp;
        <div id="particles-js"/>
      </header>

      <main>
        <div Style={ "display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;" }>
          {
            data.map( (member, index) => {
              return <WakuComponent key={ index } member={ member.fields }/>;
            } )
          }
        </div>
      </main>
    </>
  );
};

export default Members;
