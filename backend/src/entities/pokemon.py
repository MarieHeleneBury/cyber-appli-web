# coding=utf-8

from marshmallow import Schema, fields

from sqlalchemy import Column, String

from .entity import Entity, Base


class Pokemon(Entity, Base):
    __tablename__ = 'pokemons'

    name = Column(String)
    elem_type = Column(String)

    def __init__(self, name, elem_type, created_by):
        Entity.__init__(self, created_by)
        self.name = name
        self.elem_type = elem_type

class PokemonSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    elem_type = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()


