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
      <p>VERY SLOW CONTENT</p>
    </div>
  );
}
