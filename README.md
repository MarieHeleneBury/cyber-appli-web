#Projet Faille de sécurité

Pour lancer l'api, il faut

1- lancer la base de données
docker run --name simple-pokedex-db \
    -p 5432:5432 \
    -e POSTGRES_DB=simple-pokedex \
    -e POSTGRES_PASSWORD=BidoofIsTheBest \
    -d postgres

(ou restart si elle a déjà été lancée)
docker restart simple-pokedex-db

2- lancer l'api
cd backend/
./bootstrap.sh


Pour montrer l'injection SQL, on peut par exemple effectuer la commande suivante (sur le code vulnérable)

curl http://0.0.0.0:5000/pokemon?pokemon_name="Bidoof%27%20OR%201%3D1--"

qui correspond à 
curl http://0.0.0.0:5000/pokemon?pokemon_name="Bidoof' OR 1=1--"
une fois le codage url traduit

et on obtient une liste de tous les types des pokemons.



Avec le code robuste, la même requête répond une erreur 400 Bad Request.





Pour information, j'ai suivi le tutoriel à cette adresse :
https://auth0.com/blog/using-python-flask-and-angular-to-build-modern-apps-part-1/
