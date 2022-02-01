import OpenSeaCharacter from './OpenSeaCharacter';
import OpenSeaPlanets from './OpenSeaPlanets';

const ShopComponent = () => {
  return (
    <>
      <p>STORE</p>
      <OpenSeaCharacter/>

      <div className="samePlanets">
        <canvas id="myCanvas">&emsp</canvas>
      </div>

      <OpenSeaPlanets/>

    </>
  );
};

export default ShopComponent;
