import { useEffect, useState } from 'react';
import WakuComponent from '../components/wakuComponent';

const Social = () => {

  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  useEffect( () => {
    setTimeout( () => {
      setCircleRotateClass( 'gandam-transform' );
    }, 10 );

    window.init_cube_kurukuru( "social" );
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
          S.O.C.I.A.L
        </div>
      </aside>

      <header>&emsp;
        <div id="particles-js"/>
      </header>

      <main>
        <div Style={ "display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;" }>
          {
            [
              {
                name: "kottontea",
                image: "https://cdn.discordapp.com/avatars/453359701527232512/d0511ff4f2551d9c0bf42adcfe22d2af.webp?size=80",
                social: { tw: 'https://twitter.com/kottontea' },
                portfolio: [ 'https://www.kt-greenlife.site/', 'https://www.kottontea-life.com/3dcg-blender-maya/' ],
                comment: "100％CGの仕事で暮らせるようになりたいです！",
                title: "ABC", description: "dEF"
              },
              {
                name: "ペンペン",
                image: "https://cdn.discordapp.com/avatars/900155254786629662/bf1f40beaf4fbd80d76d3be1a58ebb92.webp?size=80",
                social: { tw: 'https://twitter.com/nqeWUxTs7xoQdK2' },
                portfolio: [],
                comment: "思い描いた世界を表現したい。皆と一緒にCG界でわちゃわちゃ出来たら楽しいと思ってる。",
                title: "ABC", description: "dEF"
              },
              {
                name: "Take",
                image: "https://cdn.discordapp.com/avatars/850994155416584204/e607c17a6e5f8665b86ee282be4c6258.webp?size=80",
                social: { tw: 'https://twitter.com/ryukin878' },
                portfolio: [ 'https://ryukin88.artstation.com/' ],
                comment: "得意料理はイカの甘辛煮です。",
                title: "ABC", description: "dEF"
              },
              {
                name: "ふに咲 ",
                image: "https://cdn.discordapp.com/avatars/908976195251634218/b9159bee50bf8be1e9e0c9800c600499.webp?size=80",
                social: { tw: 'https://twitter.com/funisaki' },
                portfolio: [ 'https://funisaki.com/' ],
                comment: "外にでっかい猫いたぞ！",
                title: "ABC", description: "dEF"
              },
              {
                name: "StellaRaziel (パル様)",
                image: "https://cdn.discordapp.com/avatars/802465771129012254/23e79a8040930a441f228df0e0098227.webp?size=80",
                social: { tw: 'https://twitter.com/AyamStudio' },
                portfolio: [ 'https://www.artstation.com/ayambakar' ],
                comment: "「何でもできるけど、でも両手と一生しかありません」 ",
                title: "ABC", description: "dEF"
              },
              {
                name: "YOU",
                image: "https://cdn.discordapp.com/avatars/913961731049521202/d9149cbd466dfdf7338fdfe46621cd38.webp?size=80",
                social: { tw: 'https://twitter.com/yamapyou' },
                portfolio: [ 'https://illustyou.com/' ],
                comment: "地方でデザインとかイラストとかライティングのお仕事してます。Blender勉強中です",
                title: "ABC", description: "dEF"
              },
              {
                name: "Len",
                image: "https://cdn.discordapp.com/avatars/762146238115741696/a18f0b8b2bc11cfca1fab3baf9e0115a.webp?size=80",
                social: { tw: 'https://twitter.com/Len_Art1231' },
                portfolio: [ '' ],
                comment: "仲良くしてください。",
                title: "ABC", description: "dEF"
              },
              {
                name: "Linka",
                image: "https://cdn.discordapp.com/avatars/876599812286472223/f2937163171454f9d0344378f2dcb5cb.webp?size=80",
                social: { tw: 'https://twitter.com/linkapalm' },
                portfolio: [ '' ],
                comment: "Blender楽しいな。",
                title: "ABC", description: "dEF"
              },
              {
                name: "ヘイジ",
                image: "https://cdn.discordapp.com/avatars/728618567800586273/ca281af5b3957d14de6fc90c1c951ca8.webp?size=80",
                social: { tw: 'https://twitter.com/heiji3d' },
                portfolio: [ 'https://www.youtube.com/channel/UCCf-16I2IcAc_L8vunQHJww' ],
                comment: "そこそこ楽しめるCGアニメーションつくりますｖ",
                title: "ABC", description: "dEF"
              },
              {
                name: "七星うるし",
                image: "https://cdn.discordapp.com/avatars/844178385939857408/751c74cb06862a073cd8466ebf6cfe54.webp?size=80",
                social: { tw: 'https://mobile.twitter.com/ulushi_shitisei' },
                portfolio: [ '' ],
                comment: "『セルルックは魔法』",
                title: "ABC", description: "dEF"
              },
              {
                name: "ちゅみ",
                image: "https://discord.com/assets/7c8f476123d28d103efe381543274c25.png",
                social: { tw: '' },
                portfolio: [ '' ],
                comment: "AE、PR、時々Blenderで仕事をしてます。",
                title: "ABC", description: "dEF"
              },
              {
                name: "うめちゃん",
                image: "https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=80",
                social: { tw: '' },
                portfolio: [ '' ],
                comment: "",
                title: "ABC", description: "dEF"
              }
            ].map( (member) => {
              return <WakuComponent member={ member }/>;
            } )
          }
        </div>
      </main>
    </>
  );
};

export default Social;
