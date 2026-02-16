export default async function Docs({ params }) {
  const { slug } = await params;  // slug is an array
  
  return <h1>Path: {slug.join(' / ')}</h1>;
}