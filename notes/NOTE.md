# Note

## TypeScript

...

## React Hooks

### useState

```tsx
const [state, setState] = useState<string>("");
```

### Props

```tsx
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
    return <div>{/*  */}</div>;
};
```

### React.FC

```tsx
const App: React.FC = () => {
    return <div>{/*  */}</div>;
};
```

### React.FormEvent

```tsx
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
};
```

### useRef, HTMLInputElement

```tsx
const inputRef = useRef<HTMLInputElement>(null);
```

### react-icons

```tsx
import { FaTimes } from "react-icons/fa";

const Todo = () => {
    return (
        <span>
            <FaTimes />;
        </span>
    );
};
```

### useReducer

```tsx
type Actions =
    | { type: "add"; payload: string }
    | { type: "remove"; payload: number }
    | { type: "done"; payload: number };
const TodoReducer = (state: Todo[], action: Actions) => {
    switch (action.type) {
        case "add":
            return [...state, { todo: action.payload, isDone: false }];
        case "delete":
            return state.filter((todo) => todo.id !== action.payload);
        case "done":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, isDone: !todo.isDone }
                    : todo,
            );
    }
};
const [state, dispatch] = useReducer(reducer, []);
```
