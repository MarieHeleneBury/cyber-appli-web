# coding=utf-8

from flask import Flask, jsonify, request

from .entities.entity import Session, engine, Base
from .entities.pokemon import Pokemon, PokemonSchema

# creating the Flask application
app = Flask(__name__)

# generate database schema
Base.metadata.create_all(engine)


@app.route('/pokemons')
def get_pokemons():
    # fetching from the database
    session = Session()
    pokemon_objects = session.query(Pokemon).all()

    # transforming into JSON-serializable objects
    schema = PokemonSchema(many=True)
    pokemons = schema.dump(pokemon_objects)

    # serializing as JSON
    session.close()
    return jsonify(pokemons)

@app.route('/pokemons', methods=['POST'])
def add_pokemon():
    # mount pokemon object
    posted_pokemon = PokemonSchema(only=('name', 'elem_type'))\
        .load(request.get_json())

    pokemon = Pokemon(**posted_pokemon, created_by="HTTP post request")

    # persist pokemon
    session = Session()
    session.add(pokemon)
    session.commit()

    # return created pokemon
    new_pokemon = PokemonSchema().dump(pokemon)
    session.close()
    return jsonify(new_pokemon), 201


# if len(pokemons) == 0:
#     # create and persist dummy pokemon
#     python_pokemon = Pokemon("Bidoof", "Normal", "script")
#     session.add(python_pokemon)
#     session.commit()
#     session.close()

#     # reload pokemons
#     pokemons = session.query(Pokemon).all()

# # show existing pokemons
# print('### Pokemons:')
# for pokemon in pokemons:
#     print(f'({pokemon.id}) {pokemon.name} - {pokemon.elem_type}')
