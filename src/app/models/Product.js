const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


mongoose.plugin(slug);

const Product = new Schema({
    name: { type: String },
    price: { type: String },
    brand: { type: String },
    image: { type: String },
    description: { type: String },
    slug: { type: String, slug: 'name', unique: true }
  }, {
    timestamps: true,
  });


  Product.plugin(mongooseDelete, {
    deleteAt: true,
    overrideMethods: 'all'
} );



  module.exports = mongoose.model('Product', Product);