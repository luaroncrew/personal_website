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

![](./assets/experiences/near_hack/price_formation.png)

Here is the chart explaining the price formation.
As you see, when we use combined swap, at one moment we reach a better price compared to order
book and pool. Now let’s talk about algorithms behind these simulations and how they could work in
production.

To make this very beautiful chart we had to simulate the one-moment abstract market state.
On this market we have the total amount $B = N and $A = M and 0.3% transaction fee. How did we
estimate N and M constants? Easily, this data was downloaded and parsed from Binance, so once we
reach their turnover, we know how to deal with it.

When buying
- from pool only: we have pool reserves $A=M and $B=N
- from order book only: we use Binance’s 98K limit sell orders when in total people sell N $B
starting with the first token price = M/N
- combined swap: we have pool reserves $A=M/2 and $B=N/2 and we use the same order book,
but each $B amount is divided by 2
How do our pool works? Exactly the same as on Uniswap : [Check here] ()


### Combined swap : pool ratio estimation

The idea of combined swap is just swapping tokens from pool and order book at the same time. How
to estimate which part must be taken from pool? For all the simulations we used a very simple
python script that iterates trough all possible ratios and chooses the one who gives us the best $B
amount out.


![](./assets/experiences/near_hack/python_code.png)

You can see that this algorithm is not efficient at all - O(n) complexity and too much memory
usage. However, in production we can avoid using it. How?


![](./assets/experiences/near_hack/pool_ration.png)

As you can see, starting from 10’000 $A swapping, these charts all look like y = k/x^n. This allows
us to say that depending on liquidity in pool and order book, we will be able to predict the percentage
of tokens we swap in pool due to mathematical model. In this case pool ratio calculation will
have O(1)complexity.

## Prediction on market state

As you could see previously, on all the ratio / swap amount curves we can apply a power trendline
y = k/x^n like here:

![](./assets/experiences/near_hack/pred.png)


## Conclusion

During this hackathon I could give myself a data-science challenge 
applying my knowledge on crypto market, that was cool. And also my team and I, we won a runner-up prize of 
$1500
