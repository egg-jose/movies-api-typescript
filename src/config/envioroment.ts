import dotnet from 'dotenv';
dotnet.config();

const env = {
  DATABASE_NAME: process.env.DATABASE_NAME,
	PORT: process.env.PORT,
	DATABASE_USER: process.env.DATABASE_USER,
	DATABASE_PASS: process.env.DATABASE_PASS,
	TYPEORM_HOST:  process.env.TYPEORM_HOST,
	TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
	TYPEORM_PASSWORD: process.env.TYPEORM_USERNAME,
	TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
	TYPEORM_PORT: process.env.TYPEORM_PORT
};

export default env;
