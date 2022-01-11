const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
"mongodb+srv://admin:mongodbadmin@democluster.aurnw.mongodb.net/sample_airbnb?retryWrites=true&w=majority"

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('sample_airbnb');
    const listings = database.collection('listingsAndReviews');

    // Query for a movie that has the title 'Back to the Future'
    const query = { name: "Soho Cozy, Spacious and Convenient" };
    const listing = await listings.findOne(query);

    console.log(listing);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);