module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
    }
  },
    mocha: {
    reporter: "eth-gas-reporter",
    reporterOptions: {
      gasUsageScenario: true,
      excludeContracts: ["Migrations"]
    }
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
