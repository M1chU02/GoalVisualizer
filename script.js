let goalValue = 0;
let totalProgress = 0;

function addActivity() {
  // Get the goal and activity inputs
  const goalInput = document.getElementById("goal").value;
  const activityInput = document.getElementById("activity").value;

  // Parse inputs as numbers
  const goal = parseFloat(goalInput);
  const activity = parseFloat(activityInput);

  // Validate the inputs
  if (isNaN(goal) || goal <= 0) {
    alert("Please enter a valid goal.");
    return;
  }
  if (isNaN(activity) || activity <= 0) {
    alert("Please enter a valid activity value.");
    return;
  }

  // Set goalValue if it's not already set
  if (goalValue === 0) {
    goalValue = goal;
  }

  // Add the activity to the total progress
  totalProgress += activity;

  // Cap progress at 100% if exceeded
  if (totalProgress > goalValue) {
    totalProgress = goalValue;
  }

  // Calculate the percentage of progress
  const progressPercent = (totalProgress / goalValue) * 100;

  // Update the progress bar
  const progressBarFill = document.getElementById("progressFill");
  progressBarFill.style.width = `${progressPercent}%`;
  progressBarFill.innerText = `${Math.round(progressPercent)}%`;

  // Update the goal status text
  const goalStatus = document.getElementById("goalStatus");
  goalStatus.innerText = `${totalProgress} km out of ${goalValue} km achieved.`;

  // Clear the activity input after adding
  document.getElementById("activity").value = "";
}
