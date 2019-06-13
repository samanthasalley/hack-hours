function getCoupons() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(['coupon1', 'coupon2', 'coupon3']), Math.random() * 10);
  });
}

function tryCoupon(coupon = '') {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Math.random() * 100), Math.random() * 10);
  });
}

function getBestCoupon() {
  return new Promise((resolve, reject) => {
    getCoupons()
      .then(coupons => {
        const tryProms = coupons.map(coup => tryCoupon(coup));
        Promise.all(tryProms)
          .then(discounts => {
            const bestCoupon = coupons.reduce((best, coup, i) => {
              if (discounts[i] > best.discount) return { coupon: coup, discount: discounts[i] };
              return best;
            }, { coupon: null, discount: -Infinity });
            
            resolve(bestCoupon);
          })
      })
      .catch(err => reject(err))
  });
}

getBestCoupon()
  .then(({ coupon, discount }) => {
    console.log(`The best coupon is ${coupon} with a discount of $${discount.toFixed(2)}`);
  });