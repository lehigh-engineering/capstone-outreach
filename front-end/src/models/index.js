// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Module } = initSchema(schema);

export {
  Module
};