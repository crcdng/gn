## gn! NFTs that see, hear and sense.

gn! With this project, I want to invite you to think about the possible interfaces between NFTs and their environment. I also want to provide three simple examples that can be further extended for different contexts such as exhibitions. The code in this repository is open source (MIT license). 

## context 

Nonfungible tokens live on a blockchain, a linearly growing and (in the case of [Tezos](https://tezos.com/)) evolving, yet otherwise immutable medium. A blockchain actively freezes its past by public consensus. Its environment consists of much higher levels of complexity: dynamic systems and their environments, software, hardware, "wetware" - socio-technical assemblages of interactions among human and non-human actors. An interesting question is what happens at the boundaries, and how is information exchanged between the two paradigms?

In my [previous Arduino-based prototype "gm!"](https://github.com/i3games/gm) published in December 2021, I explored one direction of this question: from the virtual blockchain into the physical space. When an NFT is being collected, "gm!" notifies the artist with a physical signal. This can be a siren going off, a motor creating movement or a firework being triggered. 

"gn!" ("good night") goes the opposite way by bringing data from the outside world into NFTs.

## alternatives

There are several methods to get external data into NFTs, each with pros and cons. 

The first option involves [a number of whitelisted domains and APIs](https://github.com/teia-community/teia-docs/wiki/Interactive-OBJKTs#allowed-domains). They allow the NFT to react to external data such as cryptocurrency rates and weather data. The NFT also has access to metadata about itself; it can can also read the wallet addresses of the creator(s) and the collector(s). This can be used in many creative ways. For example, [Adam](https://objkt.com/asset/hicetnunc/230177) by Raphaël de Courville "erases and overwrites itself gradually as more money is spent on it". 

Whitelisted domains, however, can be considered potentially unsafe and the interoperability and compatibility on different Tezos marketplacesis limited and can change anytime. The domain ownership might change anytime. There is also no strong guarantee the domain even exists a year from now.

A more secure and stable option are oracles, data feeds that allow information from decentralized off-sources, such as the current price of a stock or a fiat currency, to be integrated on-chain. The [FA2 token standard](https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-12/tzip-12.md supports [off-chain views](https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-12/tzip-12.md#off-chain-views). [Decentralized oracle networks](https://tezos.b9lab.com/oracles) such as [Chainlink](https://chain.link/) allow to create smart contracts that interact with trusted sources for off-chain information. For example, [Harbinger](https://harbinger.live/) is an oracle that provides crypto currency rates. 

Yet in an cultural exhibition context, setting up a bespoke oracle and smart contracts for it could be overkill in terms of effort. The question is if this level of decentralization is required for the project.

## see, hear and sense

In "gn!" I explore a third possibility - inside the NFT itself. Since [the beginning of Hic et Nunc](https://github.com/i3games/hen-timeline), [interactive NFTs](https://github.com/teia-community/teia-docs/wiki/Interactive-OBJKTs) have fascinated artists and collector alike. Technical challenges for interactive NFTs involve working around the restrictions of web browsers, as well as the security restrictions and the decentralized storage of NFT marketplaces. 

gn! consists of three proof-of-concept interactive NFTs. All three NFTs are minted as proof-of-concept and available on Teia.art and Objkt.com (with advanced mode activated). They are intended to demonstrate the feasibility of these concepts and to invite further artistic and technical research. As implementation prototypes, no attempt has been made to make them aesthetically pleasing. Note that I use the terms "see", "hear" and "sense" in a metaphorical way, not implying any qualities related to human sensing.   

**see** - an NFT that detects objects based on a pre-trained machine-learning model. Note this takes a long time to load the first time you access the NFT. (beta)

https://objkt.com/asset/hicetnunc/748529 (switch on Advanced mode)

https://teia.art/objkt/748529 

**hear** - an NFT that displays amplitude, waveform and frequencies of sound. (beta)

https://objkt.com/asset/hicetnunc/751086 (switch on Advanced mode)

https://teia.art/objkt/751086

**sense** - an NFT that reacts to sensor data that is streamed from an Arduino via Bluetooth. (alpha, highly experimental)

https://objkt.com/asset/hicetnunc/751132

https://teia.art/objkt/751132

Currently Chrome does not allow calling Bluetooth from within an iFrame, which leads to a bug in sense:
https://bugs.chromium.org/p/chromium/issues/detail?id=518042&desc=2
According to this bug report, it is expected to be working soon.

More details and the source code for each NFTs can be found in the three folders.

## license
Code written by me, @crcdng, is released under the terms of the MIT license. 3rd party libraries such as p5.js and ml5.js come with their own licenses, see Readme.md in the respective folders.
