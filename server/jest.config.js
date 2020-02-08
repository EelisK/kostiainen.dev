module.exports = {
  roots: ["<rootDir>/test"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
  setupFiles: ["./jest.setup.js"],
  setupFilesAfterEnv: ["./test/setup.ts"]
};
