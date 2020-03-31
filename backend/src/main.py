# coding=utf-8

from .entities.entity import Session, engine, Base
from .entities.pokemon import Pokemon

# generate database schema
Base.metadata.create_all(engine)

# start session
session = Session()

# check for existing data
pokemons = session.query(Pokemon).all()

if len(pokemons) == 0:
    # create and persist dummy pokemon
    python_pokemon = Pokemon("Bidoof", "Normal", "script")
    session.add(python_pokemon)
    session.commit()
    session.close()

    # reload pokemons
    pokemons = session.query(Pokemon).all()

# show existing pokemons
print('### Pokemons:')
for pokemon in pokemons:
    print(f'({pokemon.id}) {pokemon.name} - {pokemon.elem_type}')
