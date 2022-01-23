import React from "https://dev.jspm.io/react";

const OpenSeaCharacter = () => {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <section className="activity">
                <p>
                    {/*キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載*/}
                    {/*キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載*/}
                    {/*キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載*/}
                </p>
                <div className="activity_contents">
                    <nft-card
                        vertical
                        contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                        tokenId="68029628652796512442132285988694870032096907384190819011746662291642395918337"
                    />
                    <nft-card
                        vertical
                        contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                        tokenId="68029628652796512442132285988694870032096907384190819011746662292741907546113"
                    />
                    <nft-card
                        vertical
                        contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                        tokenId="68029628652796512442132285988694870032096907384190819011746662294940930801665"
                    />
                    <nft-card
                        vertical
                        contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                        tokenId="68029628652796512442132285988694870032096907384190819011746662296040442429441"
                    />
                    <nft-card
                        vertical
                        contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                        tokenId="68029628652796512442132285988694870032096907384190819011746662293841419173889"
                    />
                </div>
            </section>
        </>
    );
}
export default OpenSeaCharacter;
