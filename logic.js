const btcname = document.getElementById('btcname');
const ethname = document.getElementById('ethname');
const dogname = document.getElementById('dogname');

const btcprice = document.getElementById('btcprice');
const ethprice = document.getElementById('ethprice');
const dogprice = document.getElementById('dogprice');



async function getcoins() {


    let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd');

    let data =  await response.json();

    btcname.textContent = 'Bitcoin';
    btcprice.textContent = data.bitcoin.usd + " $";

    ethname.textContent = 'Ethereum';
    ethprice.textContent = data.ethereum.usd + " $";

    dogname.textContent = 'Dogecoin';
    dogprice.textContent = data.dogecoin.usd + " $";

  
    
}

getcoins();