import {React,ReactDOMServer,BrowserRouter} from "./dep.ts";

import OpenSeaPlanets from "./OpenSeaPlanets.tsx";
import OpenSeaCharacter from "./OpenSeaCharacter.tsx";

const Main = () => {
    return (
        <>
            <main>

                <OpenSeaCharacter/>

                <div className="samePlanets">
                    <canvas id="myCanvas">&emsp</canvas>
                </div>

                <OpenSeaPlanets/>

                <section className="memberActivity">
                    <h2>BPPは友達を集めてるよ</h2>
                    <div className="flex-center p1">
                        <p className="memberIcon">
                            <img src={"https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240"}/>
                        </p>
                    </div>

                    <div className="corporate_information message">
                        ようこそ,Beautiful Planets Projectへ！ <br/>

                        BPPは、CG制作の初心者から熟練者までが集まるコミュニティです。<br/>

                        Blenderへの貢献を目的としてCG惑星100個を制作とNFTを公開を進めています。 <br/>

                        惑星は想像上、架空の惑星でOK！🪐惑星と思えれば良いので、ほとんどルールはありません。（一度うめちゃんがチェックは入れます）

                        惑星はみんなが集まってくれて活動してくれた証になります。みんなで100個の惑星がつくれたらきっと素晴らしい宝物になるし、そこまでの過程を楽しみたいです。

                        もう一つの目標として、このコミュニティで創作をしたいです。既にマスコットキャラクターのパルサーちゃんが誕生しています。そしてその仲間も。みんなこのコミュニティメンバーによって生み出されています。

                        Blenderに限らず、みんなが大好きなこと、得意なことを持ち寄って、新しいことやワクワクすることをやっていきたいです！✨

                        <a className="t_w" href={'https://discord.com/channels/895078439709708318/895078442637336628'}> Discord で話しましょう </a>

                    </div>
                </section>
            </main>
        </>
    );
};
export default Main;
