
const playlist={
  name:'allan walker stuff',
  genre:'edm music',
  artist:'alan walker',
  year:2018
}

//here comes destructuring

//normally
//const artist=playlist.artist;

//destructured

 const { artist }=playlist;
 const { genre }= playlist;
 const { name, year }=playlist;

 console.log(artist +'\n'+ genre);
 console.log(name +'\n'+ year);