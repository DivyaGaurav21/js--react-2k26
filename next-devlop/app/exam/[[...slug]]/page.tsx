export default async function Exam({ params }) {
  const { slug } = await params;  // slug is an array
  return <h1>Path: {slug?.join(' / ')}</h1>;
}