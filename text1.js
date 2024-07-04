const charactersData = [
    {
        
        name: "Ramanujam 'Ambi'",
        role: "Protagonist",
        description: "Ambi is a straightforward, law-abiding lawyer who believes in order and discipline."
    },
    {
        name: "Remo",
        role: "Love interest",
        description: "Remo is the love interest of Ambi, portrayed as a modern, independent woman."
    },
    {
        name: "Anniyan",
        role: "Anti-hero",
        description: "Anniyan is a vigilante with multiple personality disorder, seeking justice through extreme methods."
    }
];

// Function to display character information
function displayCharacterInfo(character) {
    const characterInfo = document.getElementById('characterInfo');
    characterInfo.innerHTML = `
        <h3>${character.name}</h3>
        <p><strong>Role:</strong> ${character.role}</p>
        <p>${character.description}</p>
    `;
}

// Function to create character cards
function createCharacterCards() {
    const charactersList = document.getElementById('charactersList');
    charactersData.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character');
        characterCard.textContent = character.name;
        characterCard.addEventListener('click', () => {
            displayCharacterInfo(character);
        });
        charactersList.appendChild(characterCard);
    });
}

// Initialize the application
function init() {
    createCharacterCards();
}

// Run the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);