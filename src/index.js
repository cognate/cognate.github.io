const Trademark = require('./trademark');

async function get(address) {
  return await Trademark.getTrademark(address);
}

// TODO: 0x2483fb26bac54db66b99ac0339f06a7102aa89b5 - rate limit
// TODO: 0x2022e7859281b85ab6e26e46bdd188830ac31fd1 - rate limit
get('0x7ec257af9bdd4ef370e0296c89fd72a9a5c15400')
  .then(results => {
    console.log(JSON.stringify(results, null, 2));
    process.exit(0);
  })
  .catch(err => {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  });
