const config = require('../../knexfile.js');
const env = 'development';
const knex = require('knex')(config[env]);

const build_Games_Table = knex.build_Games_Table = () => {
  return knex.schema.hasTable('Games')
    .then( (exists) => {
      if(exists) {
        console.log('Games table is already alive and kicking!');
      } else {
        knex.schema.createTable('Games', (table) => {
          table.increments('id').primary();
          table.string('game_name', 15);
          table.string('word', 15);
          table.string('secret', 15);
          table.string('correct_characters', 15);
          table.string('wrong_characters', 15);
          table.integer('guesses');
        })
        .then( (table) => {
          console.log('Games table is now live!', table);
        });
      }
    });
};
// There are two different chat tables. One is for the general chat and one is for team chat. this one is for the general chat.
const build_Chats_Table = knex.build_Chats_Table = () => {
  return knex.schema.hasTable('Chats')
    .then( (exists) => {
      if(exists) {
        console.log('Chats table is already alive and kicking!');
      } else {
        knex.schema.createTable('Chats', (table) => {
          table.increments('id').primary();
        })
        .then( (table) => {
          console.log('Chats table is now live!', table);
        });
      }
    });
};

const build_Users_Table = knex.build_Users_Table = () => {
  return knex.schema.hasTable('Users')
    .then( (exists) => {
      if(exists) {
        console.log('Users table is already alive and kicking!');
      } else {
        knex.schema.createTable('Users', (table) => {
          table.increments('id').primary();
          table.string('nickname', 15);
          table.string('secret', 20);
          table.integer('score').defaultTo(0);
        })
        .then( (table) => {
          console.log('Users table is now live!', table);
        });
      }
    });
};

const build_Teams_Table = knex.build_Teams_Table = () => {
  return knex.schema.hasTable('Teams')
    .then( (exists) => {
      if(exists) {
        console.log('Teams table is already alive and kicking!');
      } else {
        knex.schema.createTable('Teams', (table) => {
          table.increments('id').primary();
          table.string('id_Games').references('id').inTable('Games');
          table.string('id_Chats').references('id').inTable('Chats');
          table.string('nickname', 15);
          table.integer('easy');
          table.integer('medium');
          table.integer('hard');
        })
        .then( (table) => {
          console.log('Teams table is now live!', table);
        });
      }
    });
};
// Users and Teams join table
const build_Users_Teams_Table = knex.build_Users_Teams_Table = () => {
  return knex.schema.hasTable('Users_Teams')
    .then( (exists) => {
      if(exists) {
        console.log('Users_Teams table is already alive and kicking!');
      } else {
        knex.schema.createTable('Users_Teams', (table) => {
          table.increments('id').primary();
          table.string('id_Users').references('id').inTable('Users');
          table.string('id_Teams').references('id').inTable('Teams');
        })
        .then( (table) => {
          console.log('Users_Teams table is now live!', table);
        });
      }
    });
};

const build_Team_Chats_Table = knex.build_Team_Chats_Table = () => {
  return knex.schema.hasTable('Team_Chats')
    .then( (exists) => {
      if(exists) {
        console.log('Team_Chats table is already alive and kicking!');
      } else {
        knex.schema.createTable('Team_Chats', (table) => {
          table.increments('id').primary();
          table.string('id_Teams').references('id').inTable('Teams')
        })
        .then( (table) => {
          console.log('Team_Chats table is now live!', table);
        });
      }
    });
};

const build_Messages_Table = knex.build_Messages_Table = () => {
  return knex.schema.hasTable('Messages')
    .then( (exists) => {
      if(exists) {
        console.log('Messages table is already alive and kicking!');
      } else {
        knex.schema.createTable('Messages', (table) => {
          table.increments('id').primary();
          table.string('id_Users').references('id').inTable('Users');
          table.string('id_Teams').references('id').inTable('Teams');
          table.string('id_Chats').references('id').inTable('Chats');
          table.timestamp('created_by_at').defaultTo(knex.fn.now());
          table.string('messages');
        })
        .then( (table) => {
          console.log('Messages table is now live!', table);
        });
      }
    });
};

const build_Leaders_Table = knex.build_Leaders_Table = () => {
  return knex.schema.hasTable('Leaders')
    .then( (exists) => {
      if(exists) {
        console.log('Leaders table is already alive and kicking!');
      } else {
        knex.schema.createTable('Leaders', (table) => {
          table.increments('id').primary();
          table.string('id_Users').references('id').inTable('Users');
          table.string('id_Teams').references('id').inTable('Teams');
        })
        .then( (table) => {
          console.log('Leaders table is now live!', table);
        });
      }
    });
};

knex.build_Db = () => {
  const promiseArr = [];
  promiseArr.push(build_Users_Table());
  promiseArr.push(build_Teams_Table());
  promiseArr.push(build_Users_Teams_Table());
  promiseArr.push(build_Games_Table());
  promiseArr.push(build_Chats_Table());
  promiseArr.push(build_Messages_Table());
  promiseArr.push(build_Team_Chats_Table());
  promiseArr.push(build_Leaders_Table());

  return Promise.all(promiseArr);
};

module.exports = knex;

