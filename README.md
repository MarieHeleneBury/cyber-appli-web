#Projet Faille de sécurité

Pour lancer l'api avec le front end, il faut

1- lancer la base de données
docker run --name simple-pokedex-db \
    -p 5432:5432 \
    -e POSTGRES_DB=simple-pokedex \
    -e POSTGRES_PASSWORD=BidoofIsTheBest \
    -d postgres

2- lancer l'api
cd backend/
./bootstrap.sh

3- lancer le frontend
cd ../frontend/
ng serve



