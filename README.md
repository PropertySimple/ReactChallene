## PropertySimple React Challenge

**What is a mortgage?** 

A mortgage is a loan used to purchase a home or property. When a borrower pays back the loan, they legally own the home. 

**Why does PropertySimple need a mortgage calculator?** 

For our property portal, [www.propertysimple.com](http://www.propertysimple.com), we’d like to show potential home buyers the price they could pay per month to own a home. The mortgage calculator should accept a dollar amount and automatically calculate an expected monthly payment for the mortgage of that property. A good example of a mortgage calculator can be found at [www.zillow.com](http://www.zillow.com) on any of their properties. 


**Design** 

Please follow the PropertySimple style guide by using our corporate colors and typography.


**Typography**

Open Sans or Arial 


**Colors**

Pink: #ff3867

Orange: #f15a29

Yellow: #ffcb1f

Blue: #53c9f7

Gray: #424143

Light Gray: #999999


**Instructions**

Build a mortage calculator using the last version of create-react-app based off the design shown below:

![](https://scontent.xx.fbcdn.net/v/t1.15752-0/p280x280/53545867_298015887558905_6873721928884944896_n.png?_nc_cat=100&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&oh=fbd9989bbc0311dce758b1c84871a307&oe=5D1E72CE)


**Requirements**

- Flexbox for CSS (Bonus points if styled-components is used)

- Can use any library to render input boxes, checkboxes etc..

- Can use any library to render the Pie chart [Bonus points if react-vis is used](https://github.com/uber/react-vis)

- It PMI is checked it should add 1% to the total loan price and gets displayed on the chart

- Formula to calculate monthly payments

  ```a  =   [ P(1 + r)Yr ] / [ (1 + r)Y - 1 ]```

  where 

  `P is the total price of the loan`

  `r is the interest rate `

  `Y is the number of payments`

  
  

  **Example**

  Suppose you take out a 30 year mortgage for $100,000 at 7% interest, and want to know the *monthly* payments. To do that, you divide the interest rate by 12 to get (.07/12) = .00583; and multiply 30 x 12 = 360 to get the number of payments. Then the formula gives you:

  ```payment = [$100,000(1 + .00583)360 x .00583] / [(1 + .00583)360 - 1]```

  ```$665```

  

#### Submit a PR to this repo with your code.



