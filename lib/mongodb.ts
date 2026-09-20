import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Por favor, adicione a variável MONGODB_URI no arquivo .env.local");
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // Permite guardar a promessa de conexão global no Node.js durante o Live Reload do Next.js
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // Em modo de desenvolvimento, usa uma variável global para não recriar
  // novas conexões a cada alteração de código (Hot Reload).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Em produção, é seguro criar uma instância normal do cliente.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

