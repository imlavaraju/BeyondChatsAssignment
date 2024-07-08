# [Telegram Clone](https://beyond-chats-assignment.vercel.app/)

A ReactJS-based clone of the Telegram messaging application. This project aims to replicate the core functionalities of Telegram, including a responsive design, a chat list, and a message view. Users can toggle between light and dark modes, and navigate through various options like profile, contacts, and settings.

## Features

- **Responsive Design**: Adapts to different screen sizes. Displays three columns (navbar, chat list, and messages area) on screens wider than 768px, and a single column layout on smaller screens.
- **Chat List**: Displays a list of available chats. Users can select a chat to view messages.
- **Message View**: Shows messages within the selected chat. The message view is scrollable.
- **Sticky Elements**: Navbar, chat header, and chat input are fixed, ensuring that only the messages area is scrollable.
- **Dark Mode Toggle**: Users can switch between light and dark modes with a smooth transition.
- **User Options**: Includes options such as My Profile, New Group, Contacts, Calls, and Settings. (Note: not implemented)

## Getting Started

Follow these steps to set up and run the project on your local machine.


### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/imlavaraju/BeyondChatAssignment.git
   cd telegram-clone
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running the Application

1. **Start the development server:**

   Using npm:

   ```bash
   npm start
   ```

   Or using yarn:

   ```bash
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

Here's a brief overview of the project's structure:

```
telegram-clone/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Chat.js
│   │   ├── ChatList.js
│   │   ├── Nav.js
│   │   └── Sidebar
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

Note : Live url is attached in header please click or click here [Telegram Clone] (https://beyond-chats-assignment.vercel.app/)
