# Step-by-Step Guide: Building a Chatbot UI

## 1. Building the ChatInput Component
Create a component to handle user input. Use state to keep track of what the user is typing.

```javascript
function ChatInput({ setChatMessages, chatMessages }) {
  const [inputText, setInputText] = React.useState("");
  // ... handle change and click
}
```

## 2. Managing the Message List State
In the parent `App` component, create an array state to store all chat messages.

```javascript
const [chatMessages, setChatMessages] = React.useState([
  { id: '1', message: 'Hello!', sender: 'bot' }
]);
```

## 3. Creating the ChatMessage Item
Define a component that takes `message` and `sender` as props and displays them. Use conditional styling or logic to differentiate between the user and the bot.

```javascript
function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "user" ? "user-style" : "bot-style"}>
      {message}
    </div>
  );
}
```

## 4. Rendering the List
In a `ChatMessages` component, map through the `chatMessages` array and return a `ChatMessage` component for each entry.

```javascript
{chatMessages.map((msg) => (
  <ChatMessage key={msg.id} message={msg.message} sender={msg.sender} />
))}
```

## 5. Sending a Message
When the "Send" button is clicked, create a new message object and update the state using the spread operator `[...chatMessages, newMessage]`.
