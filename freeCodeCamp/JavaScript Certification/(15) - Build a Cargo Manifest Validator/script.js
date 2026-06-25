function normalizeUnits(manifest) {
  let result = { ...manifest };

  if (manifest.unit === "lb") {
    result.weight = manifest.weight * 0.45;
    result.unit = "kg";
  }

  return result;
}

function validateManifest(manifest) {
  let result = {};

  if (!manifest.hasOwnProperty("containerId")) {
    result.containerId = "Missing";
  } else {
    if (manifest.containerId < 1 || !Number.isInteger(manifest.containerId)) {
      result.containerId = "Invalid";
    }
  }

  if (!manifest.hasOwnProperty("destination")) {
    result.destination = "Missing";
  } else {
    if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
      result.destination = "Invalid";
    }
  }

  if (!manifest.hasOwnProperty("weight")) {
    result.weight = "Missing";
  } else {
    if (manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
      result.weight = "Invalid";
    }
  }

  if (!manifest.hasOwnProperty("unit")) {
    result.unit = "Missing";
  } else {
    if (manifest.unit !== "kg" && manifest.unit !== "lb") {
      result.unit = "Invalid";
    }
  }

  if (!manifest.hasOwnProperty("hazmat")) {
    result.hazmat = "Missing";
  } else {
    if (typeof manifest.hazmat !== "boolean") {
      result.hazmat = "Invalid";
    }
  }

  return result;
}

function processManifest(manifest) {
  let validateResult = validateManifest(manifest);
  let hasErrors = false;

  for (let prop in validateResult) {
    hasErrors = true;
  }

  if (hasErrors) {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateResult);
    return;
  }

  console.log(`Validation success: ${manifest.containerId}`);
  console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
}

processManifest({ containerId: null, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false });
processManifest({ containerId: 1, destination: "California", weight: 554, unit: "lb", hazmat: true });
