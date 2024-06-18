export default function AppTitle(props) {
  const {
    title = 'Box Office App',
    subtitle = 'Are you looking for a movie?',
  } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
