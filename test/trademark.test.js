const expect = require('chai').expect;
require('mocha');
const Trademark = require('../src/trademark');

describe('Pulling Trademarks from Ethereum', () => {
  describe('V4 Contracts', () => {
    it('Word (initial)', async () => {
      // listing id 1024571
      // TODO: this doesnt seem right
      await assertTrademark({
        address: '0x032b847a8ced9ccd63c02853ebb4ac6588156eaf',
        timeline: {
          address: '0x3304e5d6a47678b29d2ce34a863b11b4c9ce8e55',
          documents: [
            {
              address: '0x032b847a8ced9ccd63c02853ebb4ac6588156eaf',
              hash: '0x34684ded799294c0ded938f4ab5f0dce1faa867ed827ba37832c5fc06abf4af5',
              location: 'https://s3.amazonaws.com/cog-usage-documents/5234/5239',
              timestamp: 1536602333,
              type: 'ProofOfUse',
            },
            {
              address: '0xce75fded98ce98fed2753cf49dad80cd32cb1838',
              countries: 'CA',
              timestamp: 1536602464,
              type: 'AreaOfUse',
            },
            {
              address: '0xd96e607eabb0d569989e569e6d12efedf23a3b0b',
              classOfGoods: 35,
              details: [
                'Advertising services, namely, creating corporate and brand identity for others',
                'Business management consulting with relation to strategy, marketing, production, personnel and retail sale matters',
              ],
              timestamp: 1536602559,
              type: 'Classification',
            },
            {
              address: '0x7b0ea23bcf259c21ed2a7fc2afee50e259f9f488',
              hash: '0xe75749c987abf89b77c413151d5c27416577bb882623887ee663ad152e5dcbcf',
              location: 'https://s3.amazonaws.com/cog-usage-documents/L1024571/P5382',
              timestamp: 1536602849,
              type: 'ProofOfUse',
            },
          ],
        },
        timestamp: 1536602333,
        word: 'Nextrue',
      });
    });

    it('Word 2 (initial)', async () => {
      // listing id 1024725
      await assertTrademark({
        address: '0x68b122d62d3d2e4dbbcb7c49e805d4b2dd4df8cd',
        timeline: {
          address: '0x479f6b8f9d33b94535e5936619f0cd1f24b2b96a',
          documents: [
            {
              address: '0x68b122d62d3d2e4dbbcb7c49e805d4b2dd4df8cd',
              hash: '0x99362a2d31acbd08d9d51a925384b1af5f13b70e71c7c04cc85a22c3f87d12c9',
              location: 'https://s3.amazonaws.com/cog-usage-documents/L1024725/P5405',
              timestamp: 1536597754,
              type: 'ProofOfUse',
            },
          ],
        },
        timestamp: 1536597754,
        word: 'Wellness KPI',
      });
    });

    it('Word', async () => {
      // listing id 1023562
      await assertTrademark({
        address: '0xf11fc8d56cc93577b215c6242198bc5583abb705',
        timeline: {
          address: '0x3182fd716b08109011dfa0dbb938693f49b7d503',
          documents: [
            {
              address: '0x4fe802fe8d7982049c1002aa32b09f15584f1d9a',
              countries: 'AU,CA,EPO,EUIPO,FR,GB,IE,MX,NL,NO,NZ,PH,RU,SG,US,ZA',
              regions:
                'CT,MA,ME,NH,RI,VT,NJ,NY,DC,DE,MD,PA,VA,WV,AL,FL,GA,KY,MS,NC,SC,TN,IL,IN,MI,MN,OH,WI,AR,LA,NM,OK,TX,IA,KS,MO,NE,CO,MT,ND,SD,UT,WY,AZ,CA,HI,NV,AK,ID,OR,WA,AS,FM,GU,MH,MP,PR,PW,VI',
              timestamp: 1534274219,
              type: 'AreaOfUse',
            },
            {
              address: '0xfd3ce1405634e1df8ad6383959c068c3b1e355a3',
              classOfGoods: 35,
              details: [
                'Advertising and marketing',
                'Advertising and marketing consultancy',
                'Advertising, marketing, and promoting the goods and services of others via a proprietary system of cutting edge direct and indirect sales, marketing and branding strategies - specifically utilizing Sales & Marketing Funnels',
                'Business consultation and management regarding marketing activities and launching of new products',
                'Business management consulting with relation to strategy, marketing, sales, operation, product design particularly specializing in the use of analytic and statistic models for the understanding and predicting of consumers, businesses, and market trends and actions',
                'Business marketing consulting services',
                'Business monitoring and consulting services, namely, tracking web sites and applications of others to provide strategy, insight, marketing, sales, operation, product design, particularly specializing in the use of analytic and statistic models for the understanding and predicting of consumers, businesses, and market trends and actions',
                'Business to business direct marketing services',
                'Consultation services, namely, creative and strategic consultation regarding development and production of marketing campaigns for others',
                'Consulting in the field of sales methods, sales management, and sales improvement',
                'Consumer strategy business consulting in the fields of marketing, sales, operation, and product design particularly specializing in the use of analytic models for the understanding and predicting of consumer, business, and retail market trends and actions',
                'Development of marketing strategies and concepts',
                'Direct marketing consulting services',
                'Direct marketing services',
                'Information about sales methods',
                'Marketing advisory services',
                'On-line advertising and marketing services',
                'Promoting, advertising and marketing of the brands, products, services and online websites of individuals, businesses and nonprofit organizations',
              ],
              timestamp: 1534275097,
              type: 'Classification',
            },
            {
              address: '0xcbdd85024fdd3efe8dfafa7ec3d5b248c4ee3b63',
              hash: '0x60c1fa13fdec2cd3de3932413a7309997bc2f7d5a44cd9d54c37692fb474df19',
              location: 'https://s3.amazonaws.com/cog-usage-documents/4204/4203',
              timestamp: 1534275666,
              type: 'ProofOfUse',
            },
            {
              address: '0x31b942c3d4a7a046cf4e5a17d10ef702ef6c6f8f',
              hash: '0x8084e737c7ddad256843807ba06545d50a993ed9907c3b7a76301f4532f959d3',
              location: 'https://s3.amazonaws.com/cog-usage-documents/L1023562/P4204',
              timestamp: 1534275855,
              type: 'ProofOfUse',
            },
            {
              address: '0x20bcc1c67b38433f8183227434fa59394a94b6c7',
              hash: '0x61696fb6c2f1d5b9367fc45e0beebcba4fe1c9e1d689212660f5a9b56cf847c3',
              location: 'https://s3.amazonaws.com/cog-usage-documents/L1023562/P4205',
              timestamp: 1534276212,
              type: 'ProofOfUse',
            },
            {
              address: '0xd602001a9708c7d97286bd0cbdb706f241275828',
              hash: '0xc75029be47d48ee878cdeb488c532942c62d7fdeaf7df9be8e8688e72f01de3a',
              location: 'https://s3.amazonaws.com/cog-usage-documents/L1023562/P4206',
              timestamp: 1534276683,
              type: 'ProofOfUse',
            },
          ],
        },
        timestamp: 1534272732,
        word: 'Frictionless Funnel',
      });
    });

    it('Design');

    it('Design (initial)');

    it('Word and Design');

    it('Word and Design (initial)', async () => {
      // listing id 1023727
      await assertTrademark({
        address: '0x28e89eb6400e09e979320ed712f9e08fb2207cae',
        design: '0x0ceb54a02272b7d30f9b6d005102b7dc2dd7887f9faf273fc6cc15439d9a979b',
        designLocation: 'TODO',
        timeline: {
          address: '0x28e89eb6400e09e979320ed712f9e08fb2207cae',
          documents: [
            {
              address: '0x28e89eb6400e09e979320ed712f9e08fb2207cae',
              hash: '0xf8cdac9753c950521f812e9ff444f06f23f425e8679cbad6fe8c1cd85d1a20ce',
              location: 'https://s3.amazonaws.com/cog-usage-documents/L1023727/P4364',
              timestamp: 1535302654,
              type: 'ProofOfUse',
            },
          ],
        },
        timestamp: 1535302654,
        word: 'CU4 Love',
      });
    });

    it('Word and Design 2 (initial)', async () => {
      // listing id 1023468
      await assertTrademark({
        address: '0xbe2779c097ce2c1192d50a6de7a01b31e6990338',
        timeline: {
          address: '0x2eceb99187504e199330758e8cb517a14752dcb1',
          documents: [
            {
              address: '0x5092ad92358d7e849cc6835adda29290a5a8e2b8',
              countries: 'AT,AU,BE,CA,CH,CN,CV,CZ,DE,DK,ES,FR,GB,IE,IT,JP,MC,MX,NL,NZ,PT,RU,SM,US,VA',
              regions:
                'CT,MA,ME,NH,RI,VT,NJ,NY,DC,DE,MD,PA,VA,WV,AL,FL,GA,KY,MS,NC,SC,TN,IL,IN,MI,MN,OH,WI,AR,LA,NM,OK,TX,IA,KS,MO,NE,CO,MT,ND,SD,UT,WY,AZ,CA,HI,NV,AK,ID,OR,WA,AS,FM,GU,MH,MP,PR,PW,VI',
              timestamp: 1529596170,
              type: 'AreaOfUse',
            },
            {
              address: '0xae87de21b6c9194a3021b12be5d772e9599c46c2',
              classOfGoods: 31,
              details: ['Dried flowers'],
              timestamp: 1529596883,
              type: 'Classification',
            },
            {
              address: '0x2aa53637f8455a8435f336f8f3ab11d8f4fcb333',
              hash: '0x9ba2cf7c95c37e2bb2670f7f8b213775379bd089df4ba1919164b25f14a6df30',
              location: 'https://s3.amazonaws.com/cog-usage-documents/L1023468/P4162',
              timestamp: 1529597251,
              type: 'ProofOfUse',
            },
          ],
        },
        timestamp: 1529595157,
        word: 'Lush Tree',
      });
    });
  });

  describe('V3 Contracts', () => {
    it('Word', async () => {
      // listing id 1018939
      await assertTrademark({
        address: '0xb35d271ffbd783ffb6ccb227b932298e03e15f24',
        timeline: {
          address: '0x377ba5e83d6f41d4d6fc8027dc75b034d910ff48',
          documents: [
            {
              address: '0x874ff1e64c1be0a9f04ac3c839bee3d03d0a6311',
              companyName: 'Cognate, Inc.',
              firstName: 'Test',
              lastName: 'Account',
              timestamp: 1523903446,
              type: 'Assignment',
            },
            {
              address: '0xa9f3e783bacc7260ad1330cf3f4a050a58cbbac6',
              countries: 'GB,US',
              regions:
                'CT,MA,ME,NH,RI,VT,NJ,NY,DC,DE,MD,PA,VA,WV,AL,FL,GA,KY,MS,NC,SC,TN,IL,IN,MI,MN,OH,WI,AR,LA,NM,OK,TX,IA,KS,MO,NE,CO,MT,ND,SD,UT,WY,AZ,CA,HI,NV,AK,ID,OR,WA',
              timestamp: 1523904415,
              type: 'AreaOfUse',
            },
            {
              address: '0xb5b14dedb6112478a1f036014c17bff9c88d5fba',
              classOfGoods: 45,
              details: [
                'Domain name registrar services',
                'Registration of domain names for identification of users on a global computer network [legal service]',
                'Trademark Monitoring',
              ],
              timestamp: 1523905206,
              type: 'Classification',
            },
            {
              address: '0x1f427bf99b504ccb6a6c76d743238359028fc4fc',
              hash: '0x6abc38ef9586c9f5b4b75fffc0cd96b60c58cf302415359fb08589dec5dfb8a4',
              location: 'https://s3.amazonaws.com/cog-usage-documents/177/177',
              timestamp: 1523905695,
              type: 'ProofOfUse',
            },
            {
              address: '0x26912d2871704202aae90c46f919c22723b45ffd',
              hash: '0x1e3db66dc68727e760392bf7e6aeee18687a521b768eba0268fe8bbc9bad5eb3',
              location: 'https://s3.amazonaws.com/cog-usage-documents/218/218',
              timestamp: 1523906494,
              type: 'ProofOfUse',
            },
          ],
        },
        timestamp: 1523899114,
        word: 'Cognate',
      });
    });

    it('Design', async () => {
      // listing id 1021806
      await assertTrademark({
        address: '0xca6823878b5fc9390c21c652405b000e1daa734f',
        design: '0xf54f3b87eda462770230d060fce9b9f4876cb68fe8cd38d14c00356bcff7d690',
        designLocation: 'TODO',
        timeline: {
          address: '0xe0679701c5c4258a4f6374acc7d384fe6b0c9308',
          documents: [
            {
              address: '0x6f448da05f23ddc79f3ff1f8f5bd7fa3528ce255',
              countries: 'AU,CA,DE,ES,FR,IE,IN,NL,RU,US',
              regions:
                'CT,MA,ME,NH,RI,VT,NJ,NY,DC,DE,MD,PA,VA,WV,AL,FL,GA,KY,MS,NC,SC,TN,IL,IN,MI,MN,OH,WI,AR,LA,NM,OK,TX,IA,KS,MO,NE,CO,MT,ND,SD,UT,WY,AZ,CA,HI,NV,AK,ID,OR,WA',
              timestamp: 1523904097,
              type: 'AreaOfUse',
            },
            {
              address: '0xa7daef1f0e99d7193bab32c9a5309919e60803b1',
              classOfGoods: 45,
              details: [
                'Authentication, issuance and validation of digital certificates',
                'Legal services, namely, trademark maintenance services',
              ],
              timestamp: 1523904877,
              type: 'Classification',
            },
            {
              address: '0x87eb5999771af7c700640acd755434ac186a23da',
              hash: '0x907f585ce27cafb16bc307245f2c022f67bd3f90beedb3c71ed04bbeff25de20',
              location: 'https://s3.amazonaws.com/cog-usage-documents/2563/2561',
              timestamp: 1523905612,
              type: 'ProofOfUse',
            },
          ],
        },
        timestamp: 1523902346,
      });
    });

    it('Word and Design', async () => {
      // listing id 1021552
      await assertTrademark({
        address: '0xa73a94d6d2e4de40c5a89df585385b8ae2cdf95c',
        timeline: {
          address: '0xb563a1918a94e0acf38dbf099bb5f24a7d722690',
          documents: [
            {
              address: '0xc5584d63625d2ae7d1be7061f4170a57f3d786bd',
              companyName: 'Lightworkers of the Sphere, LLC',
              firstName: 'Martin',
              lastName: 'Alberti',
              timestamp: 1523364495,
              type: 'Assignment',
            },
            {
              address: '0x6cfb4711dc0f0247bab90f1241c6c7df5cd63471',
              countries: 'CA,GB,US',
              regions:
                'CT,MA,ME,NH,RI,VT,NJ,NY,DC,DE,MD,PA,VA,WV,AL,FL,GA,KY,MS,NC,SC,TN,IL,IN,MI,MN,OH,WI,AR,LA,NM,OK,TX,IA,KS,MO,NE,CO,MT,ND,SD,UT,WY,AZ,CA,HI,NV,AK,ID,OR,WA,AS,FM,GU,MH,MP,PR,PW,VI',
              timestamp: 1523364835,
              type: 'AreaOfUse',
            },
            {
              address: '0x427b136a0071cf877c0d31e357fd6479b822ed56',
              classOfGoods: 42,
              details: `Providing online non-downloadable software for social networking and interacting in virtual reality in the field(s) of self-help, personal empowerment, behavioral and mental health, addiction recovery, and personal transformation through multi-step wellness programs','Software as a service (SaaS) services featuring software enabling and providing a virtual reality experience for personal lifestyle performance assessments by means of the users' inputted preferences and social network data','Software as a service (SaaS) services featuring voice-enabled software applications in the field(s) of self-help, personal empowerment, behavioral and mental health, addiction recovery, and personal transformation through multi-step wellness programs`,
              timestamp: 1523365494,
              type: 'Classification',
            },
            {
              address: '0x533e8332346db7b808f679cf76a75b53733d5737',
              classOfGoods: 45,
              details: `Conducting on-line personal lifestyle performance assessments based on principles of emotional happiness by means of the users' inputted preferences and social network','Providing a website featuring information regarding self-improvement','Providing online information in the field(s) of self-help, personal empowerment, behavioral and mental health, addiction recovery, and personal transformation through multi-step wellness programs','Providing online social networking services in the field(s) of self-improvement through multi-step wellness programs`,
              timestamp: 1523366987,
              type: 'Classification',
            },
            {
              address: '0xe17e034f214e402231fb1b3b23efb9b16c1a5bcc',
              hash: '0xe540a6320b6b4649f9975c538d521d08654e8c061c9719c248b22ef06b25f2cf',
              location: 'https://s3.amazonaws.com/cog-usage-documents/2456/2454',
              timestamp: 1523367516,
              type: 'ProofOfUse',
            },
            {
              address: '0x5bf955d2d0bc45f8343ca4efa2632cc89d1fb050',
              hash: '0x54fd476850714a360166d6caa0ca7b6dee7a56e4906981726c89fc31c9663aeb',
              location: 'https://s3.amazonaws.com/cog-usage-documents/L1021552/P4133',
              timestamp: 1528140660,
              type: 'ProofOfUse',
            },
          ],
        },
        timestamp: 1523364095,
        word: 'FORGIVE',
      });
    });
  });

  describe('V2 Contracts', () => {
    it('Word');

    it('Design');

    it('Word and Design', async () => {
      // listing id 1018840
      await assertTrademark({
        address: '0xa2a423a147ef2fe82f4613227f8c576fe635ec9b',
        design: '0xd0470b0caabac1bed10bf1f958d14117f8996a85d4caaa8c3fc363994180b414',
        designLocation: 'TODO',
        word: 'COGNATE',
      });
    });
  });

  async function assertTrademark(expected) {
    const actual = await Trademark.getTrademark(expected.address);
    expect(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
  }
});
