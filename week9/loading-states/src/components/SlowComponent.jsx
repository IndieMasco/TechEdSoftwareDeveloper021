// This is a slow component.
// We made it artificially slow to show loading states

async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default async function SlowComponent() {
  await delay(5000);
  return (
    <div>
      <h1>SlowComponent</h1>
      <img src="https://media1.tenor.com/m/f49vNce6MYwAAAAd/listen-i-know-im-late-i-can-explain-listen.gif" />
    </div>
  );
}
