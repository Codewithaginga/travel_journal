import icon from "../src/world.png";

export default function Header({ image }: any) {
  return (
    <header>
      <div className="items">
        <img src={image} />
        <pre>My Travel Journal.</pre>
      </div>
    </header>
  );
}
