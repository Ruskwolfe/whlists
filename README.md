# Unit Information Display

This project provides a simple web interface to display information about different units in a game. The information includes various attributes of each unit such as name, move, unit size, bravery, wounds, and save values, as well as any special abilities, magic, weapons, and more.

## Files

- **unitlist.html**: The main HTML file that contains the structure and style of the webpage.
- **unitswh.js**: The JavaScript file that defines the unit objects and their properties, as well as populates the webpage with the unit data.

## Setup

1. **Clone the Repository**: Clone this repository to your local machine using the following command:
    ```bash
    git clone https://github.com/yourusername/yourrepository.git
    ```

2. **Navigate to the Directory**: Change to the directory where the repository was cloned:
    ```bash
    cd yourrepository
    ```

3. **Open the HTML File**: Open the `unitlist.html` file in your preferred web browser. You can do this directly from the file explorer or by using a command in your terminal:
    ```bash
    open unitlist.html
    ```
    Or, if you're using Windows:
    ```bash
    start unitlist.html
    ```

## Usage

- **Select a Unit**: Use the dropdown menu to select a unit. The information about the selected unit will be displayed below the dropdown.
- **Unit Information**: The information displayed includes the unit's name, move, unit size, bravery, wounds, save values, and any special abilities, magic, weapons, etc.

## Example

Here is a brief description of how the data is structured:

### HTML Structure

The HTML file (`unitlist.html`) contains the following structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { ... }
        select#unitSelector, div#unitInfo { ... }
        div#unitInfo p { ... }
        div#unitInfo p.unitName, 
        div#unitInfo p.Move,
        div#unitInfo p.Unitsize,
        div#unitInfo p.Bravery,
        div#unitInfo p.Wounds,
        div#unitInfo p.Save { ... }
        .ability-name,
        .magic-name { ... }
        .meleeweapons,
        .specialabs,
        .magicjunk { ... }
        @media (max-width: 1080px) { ... }
    </style>
    <meta charset="UTF-8">
    <title>Unit Information Display</title>
</head>
<body>
    <select id="unitSelector">
        <option>Select a unit</option>
    </select>
    <div id="unitInfo"></div>
    <script src="unitswh.js"></script>
</body>
</html>
