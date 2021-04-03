console.log(`Execução em ambiente de ${process.env.NODE_ENV} http://localhost:8080/`  );


const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: "localhost",
  });

  await server.start();
};

init();

teste de branch



