const VehicleList = require("./controllers/vechicle/vechicle.model"); // Import the VehicleList model
const sequelize = require("./database/database"); // Import the Sequelize instance

const seedVehicleList = async () => {
  try {
    // Ensure the database connection
    await sequelize.authenticate();
    console.log("Database connection established.");

    // Sync the VehicleList model (ensure the table exists)
    await VehicleList.sync();

    // Define the seed data for bikes (2-wheelers)
    const bikeData = [
      {
        name: "Honda Activa",
        type: "Scooter",
        model: "2023",
        wheels: 2,
        createdOn: new Date(),
      },
      {
        name: "TVS Jupiter",
        type: "Scooter",
        model: "2023",
        wheels: 2,
        createdOn: new Date(),
      },
      {
        name: "Yamaha R15",
        type: "Motorcycle",
        model: "2023",
        wheels: 2,
        createdOn: new Date(),
      },
      {
        name: "KTM Duke 200",
        type: "Motorcycle",
        model: "2023",
        wheels: 2,
        createdOn: new Date(),
      },
    ];

    // Define the seed data for cars (4-wheelers)
    const carData = [
      {
        name: "Maruti Swift",
        type: "Hatchback",
        model: "2023",
        wheels: 4,
        createdOn: new Date(),
      },
      {
        name: "Hyundai i20",
        type: "Hatchback",
        model: "2023",
        wheels: 4,
        createdOn: new Date(),
      },
      {
        name: "Toyota Fortuner",
        type: "SUV",
        model: "2023",
        wheels: 4,
        createdOn: new Date(),
      },
      {
        name: "Tata Harrier",
        type: "SUV",
        model: "2023",
        wheels: 4,
        createdOn: new Date(),
      },
      {
        name: "Honda City",
        type: "Sedan",
        model: "2023",
        wheels: 4,
        createdOn: new Date(),
      },
      {
        name: "Hyundai Verna",
        type: "Sedan",
        model: "2023",
        wheels: 4,
        createdOn: new Date(),
      },
    ];

    // Combine bike and car data
    const seedData = [...bikeData, ...carData];

    // Insert the seed data into the table
    await VehicleList.bulkCreate(seedData);
    console.log("Seed data added successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Close the database connection
    await sequelize.close();
    console.log("Database connection closed.");
  }
};

// Execute the seed function
seedVehicleList();
