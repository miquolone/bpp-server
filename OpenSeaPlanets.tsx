import {React,ReactDOMServer,BrowserRouter} from "./dep.ts";

const openSea = {
    nft: {
        planets: [
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662286144837779457',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662287244349407233',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662288343861035009',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662297139954057217',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662277348744757249',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662283945814523905',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662285045326151681',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662301538000568321',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662298239465684993',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662299338977312769',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662300438488940545',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662289443372662785',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662290542884290561',
        ]
    }
}

const OpenSeaPlanets = () => {
    const [nftPlanets] = React.useState(openSea);

    React.useEffect(() => {
    }, [])

    return (
        <section className="activity">
            <h2>Planets</h2>
            <p>
                {/*惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載*/}
                {/*惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載*/}
                {/*惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載*/}
            </p>
            <div className="activity_contents">
                {
                    nftPlanets.nft.planets.map((v: string) => {
                        const url = new URL(v);
                        const patternResolve = url.pathname.match(new RegExp(/.*assets\/(0x.*?)\/(.*)/));
                        if (patternResolve) {
                            const [, contractAddress, tokenId] = patternResolve;
                            return (
                                <div key={contractAddress}>
                                    <nft-card vertical contractAddress={contractAddress} tokenId={tokenId}/>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </section>
    );
}

export default OpenSeaPlanets;
