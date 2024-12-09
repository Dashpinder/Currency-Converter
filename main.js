const btn= document.getElementById("btn");

btn.addEventListener("click", function(){
   const fromCurrency= document.getElementById("fromCurrency").value;
   const toCurrency= document.getElementById("toCurrency").value;
   const valueInput= document.getElementById("valueInput").value;
   if(!valueInput){
      alert("Please enter the value");
      return;
   }
   myFunction(fromCurrency, toCurrency, valueInput);
});


async function myFunction(fromCurrency, toCurrency, amount){
    const results= document.getElementById("results");
    
   let response= await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_gyTYYxhuHIUI7Js5NPS1gRbgOT2fpyelcZI0P6Zc&base_currency=${fromCurrency}`);

   let pkaData= await response.json();
   console.log(pkaData);

   let dashRate = pkaData.data[toCurrency].value;   
   let dashAmount= dashRate * amount;

   results.innerHTML = `${amount} ${fromCurrency} to ${dashAmount} ${toCurrency}`;
   
}


