import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Money Tracker",
      description: "Manage your personal finances",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Julián García",
        url: "https://juliangarcia.dev",
      },
      version: "1.0.0",
    },
  },
  apis: ["./src/*/Infrastructure/Presentation/Swagger/*.ts"],
};

export const swaggerSpecification = swaggerJsdoc(options);
