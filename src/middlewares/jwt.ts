import jwt, { SignOptions } from 'jsonwebtoken';
require('dotenv').config()

const jwtConfig = {
  algorithm: 'RS256',
  expiresIn: '30d'
} as SignOptions

const createToken = () => {
  var token = jwt.sign({ nome: 'Paula' }, process.env.chave!, jwtConfig);
}