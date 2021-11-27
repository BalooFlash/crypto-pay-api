/* eslint-disable no-console */
const token = '42:YOURTOKEN';

(async function run() {
  const { CryptoPay, Assets, PaidButtonNames } = await import('../index.js');

  const cryptoPay = new CryptoPay(token, { hostname: 'testnet-pay.crypt.bot' });

  // A simple method for testing your app's authentication token
  const app = await cryptoPay.getMe();
  console.log(app);

  // Create a new invoice with additional data
  const invoice = await cryptoPay.createInvoice(Assets.BTC, 1, {
    description: 'kitten',
    paid_btn_name: PaidButtonNames.VIEW_ITEM,
    paid_btn_url: 'http://placekitten.com/150',
  });
  console.log(invoice);
})();
