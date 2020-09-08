import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/reactsite',
    JWT_SECRET: process.env.JWT_SECRET || 'secretvalue',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'AfEvBKNw_8lXz5noEK1y7xLtgWUA9uKU6JkDgo0Jmcteh5aMbSxaYhRXU1qi4bak3FrE6p1d-jxDn7Sr',
    accessKeyId: process.env.accessKeyId || 'accessKeyId',
    secretAccessKey: process.env.secretAccessKey || 'EI20d3pZ4nYNUpjI7RC0PuDQ3qjDvk9ZnCPJRYjrGh8yqt29YCtocI9weHsP_LSiYynx4U2uAv9Ka9TN',
};