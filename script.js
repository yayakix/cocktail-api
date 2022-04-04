
document.querySelector('button').addEventListener('click', getDrink)

  


function getDrink(){
  let drinkChoice = document.querySelector('input').value

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkChoice 
   fetch(url)
  .then(res => res.json())
  .then(data => {
    document.getElementById("pic").src = data.drinks[0].strDrinkThumb
    document.querySelector('h2').innerHTML= data.drinks[0].strDrink
    document.getElementById("stuff").innerHTML = "ingredients include "+ data.drinks[0].strIngredient1 + ", "+ data.drinks[0].strIngredient2
    
  })
  .catch(err => {
    console.log(err)
  })


}
