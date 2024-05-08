import { createServer, Model } from 'miragejs'

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
        const names = ['John Doe','Bob Smith', 'Alice Johnson','Emmanuel', 'Mohit', 'Moses', 'Ashwani', 'Minyee', 'Ganga', 'John', 'Bob', 'George'];
        const types = [0, 1];
        const combinations = [];

        names.forEach(name => {
          types.forEach(type => {
            combinations.push({ name, type });
          });
        });

        shuffle(combinations);

        for (let combination of combinations) {
            server.create('user', combination);
          }
      },

    routes() {
      this.namespace = "api"

      this.get("/users", (schema) => {
        return schema.users.all()
      })
    },
  })

  return server
}