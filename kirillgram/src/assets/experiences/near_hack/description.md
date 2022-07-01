# NEAR x ENCODE Club hackathon

In february 2022 I participated in NEAR x ENCODE Club hackathon. NEAR is a new blockchain
and Encode Club is an educational community in web3 - decentralized web where people own their information and assets, 
not third part or companies.

# What was our project 

## What is the problem ? 
Most DEX platforms use two models of exchange: automated market maker (AMM) like liquidity
pools and order book based exchanges. Both models have some disadvantages:
- Illiquid market makes traders have difficulty in finding matching orders due to large bid-ask
spread and low trading volumes. If you want to have successful orders, you have to make sure
that your highest bid is lower than the lowest ask.
- AMM causes high slippage for large orders: Slippage relies on the liquidity pool’s size of a certain
trading pair. The liquidity pool needs to be 100x greater than the size of the order to keep the
slippage rate under 1%.

## Our solution
We decided to build an application
that implements a new market model in crypto exchange by combining two existing models. Before building something, 
I wanted to prove the utility of the application. The only way to that in our case was 
the data-science method. 

## Data-Science in this project

Our goal is providing the best price by using combined swap. To prove the the utility of these swaps,
we present you our simulations of market price formation when buying in three different ways:
- from pool only
- from order book only
- combined swap

![](./assets/experiences/near_hack/price_formation)
