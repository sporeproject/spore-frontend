# [Spore][Spore] &middot; a greedless ecosystem bringing innovative minds together

## Welcome to the Spore Github Repo

The ultra-deflationary inter-blockchain token that gives you frictionless rewards in the Avalanche ecosystem, a bridge Avalanche/Binance Smart Chain, an ultra deflationary 6% burn on every transaction on the Binance Smart chain ecosystem, and many more features in development.
  
## Considerations for Using This Repository and the API

This section outlines key considerations and steps for setting up and using this repository in conjunction with the Spore API.


### About the SporeAPI™ and how to run it locally

- By default, this repository is configured to use the Spore API hosted at `frontend-api.spore.ws`. Its main use is to retrieve some information that needs to be processed by the chain or other static data for the better display on the site and CMC/CoinGecko data requirements.

- **Using a local API Instance**:

  1. **Spore API Repository**: If you prefer to run your own instance of the Spore API, clone the [spore-api repository](https://github.com/sporeproject/spore-api) and follow the instructions.

  
  2. **Running the Application with Local API**:
     - Rename the `.env.example` file to `.env`.
     - **Only if you want to run your own local instance of SporeAPI**: Ensure the following lines exist in the `.env` file to point to your local API instance (default doesnt need the .env file to exist):
       ```
       VITE_API_URL=http://localhost:5001
       API_URL=http://localhost:5001
       ```



### Prerequisites and Local Setup

1. **Node and Yarn Installation**: Ensure that [Node.js](https://nodejs.org/) `v18.19.0`is installed in your system. Install the application by cloning this repo and installing the packages:
    ```
     npm install
    ```

2. **Running the Application**:
   - Run the application locally using the command:
    ```
     npm run dev
    ```


## How can we develop things?

We are developing constantly in a completely organic manner, in Spore there is no single "dev" team, we are all proposing and developing in what it could look as a *disorganized* manner, but in reality it is a completely organic way. Spore spreads and finds new environments in where to flourish, in a similar way as living organisms do.

## How to contribute?

Join us in our [Discord][Discord] or [Telegram][Telegram] and discover how we as a collective can push blockchain technology to the next level.

[Discord]: https://discord.gg/n5P7n7DBhh
[Spore]: https://spore.earth
[Telegram]: https://t.me/sporeproject

