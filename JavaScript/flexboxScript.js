// Ensure both extra panels are hidden when the page loads
window.addEventListener('load', function() {
    const extraPanelTools = document.getElementById('extraPanel');
    const extraPanelLearn = document.getElementById('extraPanel1');
    extraPanelTools.style.display = 'none'; // Hide the Tools panel
    extraPanelLearn.style.display = 'none'; // Hide the Learn English panel
});

// Toggle the visibility of the Tools extra panel when the "TOOLS" button is clicked
document.getElementById('cursesButton1').addEventListener('click', function() {
    const extraPanelTools = document.getElementById('extraPanel');
    extraPanelTools.style.display = extraPanelTools.style.display === 'flex' ? 'none' : 'flex';

    // Hide the other panel if open
    const extraPanelLearn = document.getElementById('extraPanel1');
    if (extraPanelLearn.style.display === 'flex') {
        extraPanelLearn.style.display = 'none';
    }
});

// Toggle the visibility of the Learn English extra panel when the "Learn English" button is clicked
document.getElementById('cursesButton2').addEventListener('click', function() {
    const extraPanelLearn = document.getElementById('extraPanel1');
    extraPanelLearn.style.display = extraPanelLearn.style.display === 'flex' ? 'none' : 'flex';

    // Hide the other panel if open
    const extraPanelTools = document.getElementById('extraPanel');
    if (extraPanelTools.style.display === 'flex') {
        extraPanelTools.style.display = 'none';
    }
});
