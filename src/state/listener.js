import store from ".store";

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched),
      // we will update local component state and force component to rerender
      // with new data.

      this.setState({
        items: store.getState().items,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.items.map((item) => (
          <p> {item.title} </p>
        ))}
      </div>
    );
  }
}

render(<Items />, document.getElementById("app"));
