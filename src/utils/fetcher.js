
export const selectRandomYoutubeVidKey = () => {
  const keys = process.env.REACT_APP_YouTube_Keys.split(","); //we are splitting the api keys to make an array
  const random = Math.floor(Math.random() * Math.floor(keys.length)); //this will get a random number;
//   console.log(random)
    return keys[random];
};



export const fetchSongsWithArtistName = async function(artistName){

    try{

        const response = await fetch(`https://mourits-lyrics.p.rapidapi.com/?artist=${artistName}&song="${artistName}"`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mourits-lyrics.p.rapidapi.com",
                "x-rapidapi-key": "b8f2727860msh253b45ec7aa1e12p1357dbjsn45153a422123"
            }
        })
        
        

        const data = await response.json();
        console.log(data);

    }catch(err){
        console.log(err)
    }
}