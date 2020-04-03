# coding=utf-8

from flask import Flask, jsonify, request
from flask_cors import CORS

from .entities.entity import Session, engine, Base
from .entities.pokemon import Pokemon, PokemonSchema

# creating the Flask application
app = Flask(__name__)
CORS(app)

# generate database schema
Base.metadata.create_all(engine)


@app.route('/pokemons')
def get_pokemons():
    # # fetching from the database
    # session = Session()
    # pokemon_objects = session.query(Pokemon).all()

    conn = engine.connect() # connect to database
    query = conn.execute("SELECT * FROM pokemons") # This line performs query and returns json result
    return {'pokemons': [i for i in query.cursor.fetchall()]} 
    
    # # transforming into JSON-serializable objects
    # schema = PokemonSchema(many=True)
    # pokemons = schema.dump(pokemon_objects)

    # # serializing as JSON
    # session.close()
    # return jsonify(pokemons)

@app.route('/pokemons', methods=['POST'])
def add_pokemon():
    pokemon = request.get_json()
    print("pokemon : ", pokemon, type(pokemon))
    print("pokemon['name'] : ", pokemon['name'], type(pokemon['name']))
    conn = engine.connect() # connect to database
    query_post_string = "INSERT INTO pokemons (name, elem_type) VALUES ('" + pokemon['name'] + "', '" + pokemon['elem_type'] +"')"
    query_post = conn.execute(query_post_string) # This line performs query and returns json result
    query_get = conn.execute("SELECT * FROM pokemons") 
    return {'pokemons': [i for i in query_get.cursor.fetchall()]}
    
    
    # # mount pokemon object
    # posted_pokemon = PokemonSchema(only=('name', 'elem_type'))\
    #     .load(request.get_json())

    # pokemon = Pokemon(**posted_pokemon, created_by="HTTP post request")

    # # persist pokemon
    # session = Session()
    # session.add(pokemon)
    # session.commit()

    # # return created pokemon
    # new_pokemon = PokemonSchema().dump(pokemon)
    # session.close()
    # return jsonify(new_pokemon), 201


@app.route('/pokemon')
def get_type():
    # pokemon_name = request.get_json()
    pokemon_name = request.args.get('pokemon_name')
    print(pokemon_name)
    # posted_pokemon = PokemonSchema(only=('name', 'elem_type'))\
    #     .load(request.get_json())
    # return 'Normal'

    conn = engine.connect() # connect to database
    query_get = conn.execute("SELECT name, elem_type FROM pokemons WHERE name = '" + pokemon_name + "'")
    answer = query_get.cursor.fetchall()
    return {'pokemon' : answer}
    
