//By: Jed Marco S. Mendizabal
// Enter your code below this line

/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name_, _hairstyle_, _hair_color_, _eye_color_, _shirt_type_, _bling_) {
   const NFT = {
      "name": _name_,
      "hairStyle": _hairstyle_,
      "hairColor": _hair_color_,
      "eyeColor": _eye_color_,
      "shirtType": _shirt_type_,
      "bling": _bling_
   }
   NFTs.push(NFT)
   console.log("Minted: " + _name_);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i = 0; i < NFTs.length; i++) {
      console.log("\nID: \t\t" + (i + 1));
      console.log("Name: \t\t" + NFTs[i].name);
      console.log("Hairstyle: \t" + NFTs[i].hairStyle);
      console.log("Haircolor: \t" + NFTs[i].hairColor);
      console.log("Eyecolor: \t" + NFTs[i].eyeColor);
      console.log("Shirt Type: " + NFTs[i].shirtType);
      console.log("Bling: \t\t" + NFTs[i].bling);
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\nYou have a total number of " + NFTs.length + " NFTs.");
}

// call your functions below this line
mintNFT("Marco", "curtains cut ", "black", "brown", "leather jacket", "gold watch");
mintNFT("New Jersey", "long hair", "blue", "blue", "leotard", "ice cream necklace");
mintNFT("Enterprise", "long hair", "white", "blue", "military uniform", "war medals");
mintNFT("Pola", "medium hair", "blue", "red", "military uniform", "golden sabre");
mintNFT("Vittorio Veneto", "long hair", "gray", "gray", "military uniform", "gray sword");
mintNFT("Taihou", "twintails", "black", "dark red", "school uniform", "paper fan ornament");
mintNFT("Musashi", "long hair", "purple", "brown", "kimono", "animal ears");
mintNFT("Bismarck", "long hair", "blonde", "blue", "military uniform", "country flag");
mintNFT("Prinz Eugen", "twintails", "silver", "green", "military uniform", "headdress");
mintNFT("Rikka Takarada", "medium hair", "black", "blue", "school uniform", "red ribbon");
mintNFT("Soyeon", "long hair", "black", "brown", "casual", "gold chains");
mintNFT("Helm", "long hair", "blue", "blue", "navy uniform", "wooden sword");
mintNFT("Rapi", "long hair", "brown", "brown", "military uniform", "choker");
mintNFT("Kafka", "ponytail", "purple", "red", "spider jacket", "spider-shaped earrings");
mintNFT("Himeko", "long hair", "red", "brown", "long dress", "golden rose");
listNFTs();
getTotalSupply();
