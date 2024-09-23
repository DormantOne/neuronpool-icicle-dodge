/* Utility class for horizontal stack layout (PascalCase) */
.HStack {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh; /* Full viewport height */
}

/* Parameters Section - fits its content */
.ParametersSection {
    flex: 0 0 auto; /* Only take the space needed for the content */
    display: flex;
    flex-direction: column;
    border: 2px solid #333;
    box-sizing: border-box;
}

/* Visualizer and Gameplay sections - evenly divide remaining space */
.VisualizerSection,
.GameplaySection {
    flex: 1; /* Each takes half of the remaining space */
    display: flex;
    flex-direction: column;
    border: 2px solid #333;
    box-sizing: border-box;
}

/* Header for each section */
.SectionHeader {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 1.5em;
}

/* Content inside each section */
.SectionContent {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    background-color: #f4f4f4;
}

/* Utility classes in kebab-case for styling adjustments */
.full-width {
    width: 100%;
}

.text-center {
    text-align: center;
}
