// Function to generate day sections dynamically based on the number of days selected
function generateDaySections() {
  const numDays = parseInt(document.getElementById('number-of-days').value);
  const daySections = document.getElementById('day-sections');
  daySections.innerHTML = ''; // Clear previous sections

  // Get selected subjects from the multi-select field
  const subjectsSelect = document.getElementById('subjects');
  const selectedSubjects = Array.from(subjectsSelect.selectedOptions).map(option => option.value);

  // Generate each day section
  for (let i = 1; i <= numDays; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day-section';
    dayDiv.innerHTML = `<h3>Day ${i} Lesson Plan Details</h3>`;

    // For each subject, create a subject section within the day
    selectedSubjects.forEach(function(subject) {
      const subjectDiv = document.createElement('div');
      subjectDiv.className = 'subject-section';
      subjectDiv.innerHTML = `<h4>${subject}</h4>
        <div class="form-group">
          <label>Learning Objectives:</label>
          <textarea placeholder="Enter learning objectives..."></textarea>
        </div>
        <div class="form-group">
          <label>Teaching Methods:</label>
          <textarea placeholder="Enter teaching methods..."></textarea>
        </div>
        <div class="form-group">
          <label>Materials & Resources:</label>
          <textarea placeholder="List materials and resources..."></textarea>
        </div>
        <div class="form-group">
          <label>Assessment Methods:</label>
          <textarea placeholder="Enter assessment methods..."></textarea>
        </div>
        <div class="form-group">
          <label>Special Considerations:</label>
          <textarea placeholder="Any special considerations..."></textarea>
        </div>
        ${i > 1 ? `<div class="form-group"><label><input type="checkbox"> Build on previous day outcomes</label></div>` : ''}`;
      dayDiv.appendChild(subjectDiv);
    });
    daySections.appendChild(dayDiv);
  }
}

// Set up event listeners
document.getElementById('number-of-days').addEventListener('change', generateDaySections);
document.getElementById('subjects').addEventListener('change', generateDaySections);

// Generate initial day sections on page load
document.addEventListener('DOMContentLoaded', generateDaySections);

// Dummy listener for the generate button (replace with your AI integration later)
document.getElementById('generate-plan').addEventListener('click', function() {
  document.getElementById('generated-plan').innerHTML = `
    <h3>Generated Weekly Lesson Plan</h3>
    <p>Plan generated based on your inputs. (This is where the AI-generated plan would appear.)</p>
  `;
});// JavaScript source code
