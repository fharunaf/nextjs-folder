function Cap({guest}) {
  return <h2>Tea cup for guest #{guest}</h2>
}

export default function TeaSet() {
  return (
    <>
      <Cap guest={1} />
      <Cap guest={2} />
      <Cap guest={3} />
    </>
  )
}