# Far Away Packing List

A simple and interactive packing list app built with React, helping users to create and organize their packing lists efficiently. Users can add items, specify quantities, mark items as packed, and sort or clear the list as needed. The app also provides useful statistics on the packing progress.

## Features

- **Add Items**: Users can add items to their packing list with a specified quantity.
- **Update Packing Status**: Mark items as packed or unpacked to keep track of progress.
- **Delete Items**: Remove items from the list when no longer needed.
- **Sorting Options**: Sort the list by item description or packing status.
- **Packing Progress Stats**: View the percentage of items packed, total items, and remaining items.
- **Clear List**: Remove all items from the list with one click.

## Components

- **App**: Main container for the app’s functionality and state management.
- **Form**: Component to add new items to the packing list.
- **Item**: Represents individual items with options to mark as packed and delete.
- **PackingList**: Displays all items and provides sorting and clearing options.
- **Stats**: Shows packing progress, including the number of packed and total items.

## Installation and Usage

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/seif32/react-travel-list.git
   cd react-travel-list
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

```
far-away-packing-list/
│
├── public/                  # Public assets
└── src/
    ├── components/          # UI Components
    │   ├── App.js
    │   ├── Form.js
    │   ├── Item.js
    │   ├── Logo.js
    │   ├── PackingList.js
    │   └── Stats.js
    │
    ├── index.js             # App entry point
    └── styles.css           # Styling
```

## Styling

The app uses CSS for styling, including custom fonts and color schemes to create an engaging UI. Components are styled to be responsive and user-friendly.

## Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a new branch with your feature:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes and push the branch:
   ```bash
   git commit -m "Add your message"
   git push origin feature-branch
   ```
4. Open a pull request.

## Contact

For any inquiries, feel free to reach out:

- **Email**: [20P1710@eng.asu.edu.eg](mailto:20P1710@eng.asu.edu.eg)
- **GitHub**: [seif32](https://github.com/seif32)

---

**Happy Packing! 🧳**
