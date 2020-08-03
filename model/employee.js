const Sequelize = require('sequelize');
const db = require('../configuration/config');

const employees = db.define(
    'employees',
    {
        id: {
            type: Sequelize.INTEGER,
            AllowNull: false,
            primaryKey: true
        },
        first_name: {
            type: Sequelize.STRING,
            AllowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
            AllowNull: false
        },
        salary: {
            type: Sequelize.STRING,
            AllowNull: false
        }
    },
    {
        tableName: 'employees',
        timestamps:false
    }
);

module.exports = employees;