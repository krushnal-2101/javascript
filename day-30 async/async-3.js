
async function fetchingData() {
  console.log("Fetching data...");

  let dataAvailable = true;

  try {
    if (dataAvailable) {
      setTimeout(() => {
        console.log(" success : ", "data fetched successfully");
      }, 5000);
    } else {
      throw new Error(" something went wrong , no data available for fetching");
    }
  } catch (error) {
    console.log("error :", error.message);
  }
}

fetchingData();