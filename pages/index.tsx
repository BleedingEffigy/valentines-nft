import Head from 'next/head'

export default function Home() {
  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Boring Bananas Company</title>
        <link rel="icon" href="/images/favicon.jpg" />

        <meta property="og:title" content="Boring Bananas Co." key="ogtitle" />
        <meta property="og:description" content="Here at Boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS
bananas out known to man." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://boringbananas.co/" key="ogurl"/>
        <meta property="og:image" content="https://boringbananas.co/images/Hola.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://boringbananas.co/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="boringbananas.co" key="twdomain" />
        <meta property="twitter:url" content="https://boringbananas.co/" key="twurl" />
        <meta name="twitter:title" content="Boring Bananas Co." key="twtitle" />
        <meta name="twitter:description" content="Here at boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS
bananas out known to man." key="twdesc" />
        <meta name="twitter:image" content="https://boringbananas.co/images/Hola.gif" key="twimage" />
      </Head>


      <div className="min-h-screen py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
      <img src="/images/Moon.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none" width="1308" />
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
        <div className="max-w-md mx-auto">
          <div className="divide-y divide-gray-300/50">
            <div className="py-8 text-base leading-7 space-y-6 text-gray-600">
              <h1 className="text-4xl text-pink-500/80 font-extrabold tracking-wider">Valentines White List</h1>

              <p>
                Here you can find a piece of art made by my girlfriend, and minted into a bundle of 
                erc1155 tokens that live on the Rinkeby testnet.
              </p>

              <p>
                Holding this token will grant a whitelist for the &nbsp;
                <a href="https://conedoods.vercel.app/" className="underline">Cone Doods NFT</a> project.
                Get whitelisted, while learning how to mint a token!
              </p>

              <iframe
                src="https://cloudflare-ipfs.com/ipfs/QmfDKuuMy6chN9dWichrGzS8amhAyCdw6ttGbRPL5WjgDy/bundledrop.html?contract=0xC4aCd8415ff4f7d9DDb328B4222918f3c62D8b81&chainId=4&tokenId=0"
                width="600px"
                height="600px"
                style={{maxWidth:"100%"}}
                frameBorder="0"
              />

            </div>
            <div className="pt-8 text-base leading-7 font-semibold bg-pink-500/30 rounded-lg p-2 shadow-md shadow-pink-500/50">
              <p className="text-gray-900">Want to learn more about Web3?</p>
              <p>
                <a href="https://ephemeus.ahernandez.dev/" className="text-pink-500 hover:text-pink-600">Visit our DAO &rarr;</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>


    </div> 
  )
}
