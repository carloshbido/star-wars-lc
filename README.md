# Projeto Arquitetura Monolítica

- Realizar o consumo da API https://swapi.dev/
    - Endpoints possíveis
        - films
        - species
        - people
        - planets
        - starships
    
- Criar um endpoint chamado /filme, na qual ele deverá receber o parâmetro id via Param, na qual deverá buscar o filme na api e retornar ao usuário os dados da seguinte maneira:

```
{
    "title": "A New Hope",
	"episode_id": 4,
	"opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
	"director": "George Lucas",
	"producer": "Gary Kurtz, Rick McCallum",
	"release_date": "1977-05-25",
	"characters": [
		"Luke Skywalker",
		"C-3P0",
		"R2-D2",
		"Darth Vader",
		...
	],
	"planets": [
		"Tatooine",
		"Alderaan",
		"Yavin IV"
	],
	"starships": [
		"CR90 corvette",
		"Star Destroyer",
		"Sentinel-class landing craft",
		"Death Star",
		"Millennium Falcon",
		...
	],
	"vehicles": [
		"Sand Crawler",
		...
	],
	"species": [
		"Human",
		"Droid",
		...
	]
}
```

- Crie rotas para /personagem, /veiculos, /naves, /planetas e /especies