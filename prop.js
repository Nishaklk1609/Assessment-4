// Props are inputs passed from a parent component to a child component.
// They are read-only (you cannot change them inside the child).

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="Nisha" />;
}