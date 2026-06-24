import {buscarJogos} from "@/lib/futebol";

export async function GET(){
 const jogos = await buscarJogos();
 return Response.json(jogos);
}