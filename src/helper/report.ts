const report = require("multiple-cucumber-html-reporter");
const { Timer } = require("./timer");

const startDate = Timer.getStartTime(); // ✅ read from file
const endDate = new Date();
const durationMs = endDate.getTime() - startDate.getTime();
const duration = `${Math.floor(durationMs / 1000)} seconds`;

console.log("📝 Generating HTML Report...");
console.log("📅 Start Time:", startDate.toLocaleString());
console.log("📅 End Time:", endDate.toLocaleString());
console.log("⏱️ Total Duration:", duration);

report.generate({
  jsonDir: "test-results",
  reportPath: "./html-report",
  reportName: "Playwright BDD Report",
  pageTitle: "DemoWebSHop Tricentis Application",
  metadata: {
    browser: {
      name: "chrome",
      version: "110.0",
    },
    device: "Divraj's Laptop",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test Info",
    data: [
      { label: "Project", value: "Book Cart project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
      { label: "Execution Start Time", value: startDate.toLocaleString() },
      { label: "Execution End Time", value: endDate.toLocaleString() },
      { label: "Total Duration", value: duration },
    ],
  },
});
console.log("✅ HTML Report generated successfully at ./html-report/index.html");