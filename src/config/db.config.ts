import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as any,
    logging: false,
  }
);

export default sequelize;


// import { Sequelize } from 'sequelize';
// import * as dotenv from 'dotenv';

// dotenv.config();
// console.log("Before sequelize")
// const sequelize = new Sequelize({
//     database:  "userManagement",
//     username:  "root",
//     password:  "admin",
//     host:  "localhost",
//     dialect:  "mysql",
//     logging: false,
//   });
// console.log("After sequelize");
// export default sequelize;
