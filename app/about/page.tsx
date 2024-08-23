import Link from "next/link";
import Search from "../../components/busqueda/search"

export default function Page() {
  return (
    <div style={{ backgroundColor: 'gray' }}>
      <h1>About</h1>
      <Link href="/">Home</Link>
      <Search/>
    </div>
    
  );
}
