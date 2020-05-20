# sequence-predictor
Integer sequence prediction from OEIS database.

Thoughts:
1. For sequence prediction, the first thought is applying the ML technique so that we don't need to always proviede the fixed formula to verify if the sequence matches. But I know less about ML so this is not the solution for me.
2. So that I need to solve this problem by feeding some fixed formulas, which I tried to find by searching the internet. Then the OEIS database came to a perfect solution, so I tried coding a bit by fetching the result from calling the search API. Then failed due to the CORS policy.
3. So that I have to collect the formula on my own. I built a SequenceMethod class for feeding the methods with matcher and predictor. If a sequence passed a specific method mathcer, then we can use the predictor to get the following predictions. And I've feeded two methods as examples. These methods should be ordered by the algorithm complexity to get the easiest & fastest prediction.
