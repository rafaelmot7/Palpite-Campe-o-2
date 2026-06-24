export async function buscarJogos(){
 const resposta = await fetch(
  "https://v3.football.api-sports.io/fixtures?live=all",
  {
   headers:{
    "x-apisports-key": process.env.API_FOOTBALL_KEY
   }
  }
 );
 const dados = await resposta.json();
 return dados.response;
}