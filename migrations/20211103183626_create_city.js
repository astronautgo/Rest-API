
exports.up = function(knex) {
  return knex.schema
    .createTable('city', tbl => {
        tbl.integer('ID')
        tbl.text('Name')
        tbl.text('CountryCode')
        tbl.text('District')
        tbl.integer('Population')
    })
    .createTable('country', tbl => {
        tbl.text('Code')
        tbl.text('Name')
        tbl.text('Continent')
        tbl.text('Region')
        tbl.integer('SurfaceArea')
        tbl.text('IndepYear')
        tbl.integer('Population')
        tbl.double('LifeExpectancy')
        tbl.double('GNP')
        tbl.text('GNPOld')
        tbl.text('LocalName')
        tbl.text('GovernmentForm')
        tbl.text('HeadOfState')
        tbl.integer('Capital')
        tbl.text('Code2')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('city')
    .dropTable('country')
};
