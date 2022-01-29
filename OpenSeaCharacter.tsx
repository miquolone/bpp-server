import React from "https://dev.jspm.io/react";

const openSea = {
    nft: {
        celestials: [
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662292741907546113',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662293841419173889',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662294940930801665',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662296040442429441',
            'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662291642395918337',
        ]
    }
}

const OpenSeaCharacter = (props) => {
    const [nftPlanets] = React.useState(openSea);

    React.useEffect(() => {
    }, [])

    return (
        <section className="activity">
            <h2>CELESTIALS</h2>
            <p>
                {/*キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載*/}
                {/*キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載*/}
                {/*キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載*/}
            </p>
            <div className="activity_contents">
                {
                    nftPlanets.nft.celestials.map((v: string) => {
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
export default OpenSeaCharacter;
