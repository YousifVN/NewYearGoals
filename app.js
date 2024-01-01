document.addEventListener('DOMContentLoaded', function() {
    const goalForm = document.getElementById('goalForm');
    const userGoalsList = document.querySelector('#userGoals ul');
    const completedGoalsList = document.querySelector('#completedGoals ul');
    let userGoalCount = 1; // Initialize goal count for Your Goals

    goalForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const goalInput = document.getElementById('goalInput').value;

        if (goalInput.trim() !== '') {
            addGoalToList(goalInput, userGoalsList, 'user', userGoalCount++);
            this.reset(); // Reset the form
        }
    });

    document.getElementById('goalInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const goalInput = this.value;

            if (goalInput.trim() !== '') {
                addGoalToList(goalInput, userGoalsList, 'user', userGoalCount++);
                this.value = ''; // Clear the input field after adding the goal
            }
        }
    });

    userGoalsList.addEventListener('click', function(event) {
        if (event.target.classList.contains('complete-button')) {
            const completedGoal = event.target.parentNode;
            completedGoal.querySelector('button').remove(); // Remove button from goal
            completedGoalsList.appendChild(completedGoal);
            completedGoal.textContent = `${completedGoalsList.children.length}. ${completedGoal.textContent.substring(3)}`;
        }
    });

    function addGoalToList(goalText, list, section, count) {
        const newGoal = document.createElement('li');
        newGoal.textContent = `${count}. ${goalText}`;
        
        const completeButton = document.createElement('button');
        completeButton.textContent = '✓';
        completeButton.classList.add('complete-button');
        newGoal.appendChild(completeButton);

        list.appendChild(newGoal);
    }
});
