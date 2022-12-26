
# UseDebounce Custom Hook 

useDebounce is a custom React hook that debounces input by delaying updates to a value for a given amount of time.

## Installation
```bash
  npm i use-debounce-custom-hook
```
## Usage

useDebounce is a custom React hook that debounces input by delaying updates to a value for a given amount of time. This can be useful for optimizing performance by limiting the number of updates to a value, or for implementing debounced API calls or search queries.

To use the useDebounce hook, pass the input value and debounce timeout as arguments. The hook returns the debounced value, which can be used to update the component's state or trigger an API call.

Here is an example of how to use the useDebounce hook in a React component:

```bash
import { useDebounce } from "use-debounce-custom-hook";

function App() {
  const [value, setValue] = useState("")
  const debouncedValue = useDebounce(value, timer)
  return (
    <div className="App">
     <input value={value} onChange={event => setValue(event.target.value)} />
    <p>
      Debounced Value: <code>{debouncedValue}</code>
    </p>
    </div>
  );
}

export default App;
```
This component includes an input that updates the component's value state when the user types. The useDebounce hook is called with the value and debounceTimeout as arguments, and it returns the debounced value. The component then displays the debounced value in a p element.

The useDebounce hook sets a timeout to update the debounced value after the specified debounceTimeout, and it clears the timeout when the component unmounts or the value changes. This ensures that the debounced value is only updated after the specified debounceTimeout has elapsed, regardless of how often the value changes.

## Authors

- [@eronred](https://www.github.com/eronred)

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eronred)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/imeronn)