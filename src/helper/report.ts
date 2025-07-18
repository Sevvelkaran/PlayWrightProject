const report = require("multiple-cucumber-html-reporter");

const timestamp = new Date().toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata", // or your local time zone
  hour12: true,
});

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/cucumber-html-report.html",
  reportName: "BDD Test Report",
  pageTitle: "BDD Test Report",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },
    device: "Karan machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Book Cart Project" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "Smoke-1" },
      { label: "Execution Time", value: timestamp },
    ],
  },
});