/**
 * Bulletin.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true,
      size: 500
    },
    content: {
      type: 'string',
      required: true,
      size: 500
    },
    is_deleted: {
      type:'integer',
      defaultsTo: 0
    }
  }
};

