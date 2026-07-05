// --- Provided Helper Functions ---
function getStatusByName(jsonData, targetName) {
  return jsonData.Result?.find((item) => item.Name === targetName) || null;
}

function getSecondaryDataByName(jsonData, targetName) {
  return (
    jsonData.Result?.CaseTypes?.find(
      (item) => item.CaseTypeName === targetName,
    ) || null
  );
}

// --- 1. Validate Statuses Function ---
function validateStatuses(jsonData, statusesArray) {
  for (const status of statusesArray) {
    const foundStatus = getStatusByName(jsonData, status);

    // If the helper function returns null, throw an error immediately
    if (foundStatus === null) {
      throw new Error(
        `Validation Error: Required status '${status}' is missing or null.`,
      );
    }
  }
  return true; // Returns true if everything validates successfully
}

// --- 2. Validate Permit Types Function ---
function validatePermitTypes(jsonData, permitTypesArray) {
  for (const permitType of permitTypesArray) {
    const foundPermit = getSecondaryDataByName(jsonData, permitType);

    // If the helper function returns null, throw an error immediately
    if (foundPermit === null) {
      throw new Error(
        `Validation Error: Required permit type '${permitType}' is missing or null.`,
      );
    }
  }
  return true; // Returns true if everything validates successfully
}

module.exports = { validateStatuses, validatePermitTypes };
