# [Spore][Spore] &middot; a greedless ecosystem bringing innovative minds together

## Welcome to the Spore Github Repo

The ultra-deflationary inter-blockchain token that gives you frictionless rewards in the Avalanche ecosystem, a bridge Avalanche/Binance Smart Chain, an ultra deflationary 6% burn on every transaction on the Binance Smart chain ecosystem, and many more features in development.
  
## Considerations for Using This Repository and the API

This section outlines key considerations and steps for setting up and using this repository in conjunction with the Spore API.

### Prerequisites and Local Setup

1. **Node and Yarn Installation**: Ensure that [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) are installed on your system.

2. **Running the Application**:
   - Run the application locally using the command:
     ```
     yarn dev
     ```

### API Configuration

- **Default API**: By default, this repository is configured to use the Spore API hosted at `api.sporeproject.org`.
  
- **Using a Custom API Instance**:
  1. **Spore API Repository**: If you prefer to run your own instance of the Spore API, clone the [spore-api repository](https://github.com/sporeproject/spore-api).
  2. **Running the Spore API**:
     - Navigate to the cloned `spore-api` directory.
     - Run the API using Python:
       ```
       python spore-api.py
       ```
  3. **Environment Configuration**:
     - Rename the `.env.example` file to `.env`.
     - Ensure the following line exists in the `.env` file to point to your local API instance:
       ```
       REACT_APP_API_URL=http://localhost:5001
       ```
  4. **Running the Application with Local API**:
     - Ensure the above steps are completed.
     - Run the application using:
       ```
       yarn dev
       ```
       This configuration will allow you to run the website entirely locally, using your instance of the Spore API.


## How can we develop things?

In our [Discord][Discord] server we are developing constantly in a completely organic manner, in Spore there is no single "dev" team, we are all proposing and developing in what it could look as a *disorganized* manner, but in reality it is a completely organic way. Spore spreads and finds new environments in where to develop and flourish, in a similar way as living organisms do.

## How to contribute?

Join us in our [Discord][Discord] and discover how we as a collective can push blockchain technology to the next level.

[Discord]: https://discord.gg/n5P7n7DBhh
[Spore]: https://spore.earth

