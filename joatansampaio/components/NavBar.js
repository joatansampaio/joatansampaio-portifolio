

export default function NavBar(){

  return (
      <nav className="absolute top-0 w-min whitespace-nowrap left-1/2 -translate-x-1/2 pt-6 z-20">
      <ul className='list-none inline-flex gap-5 text-blue-50 text-xl' >
        <li><a href="#">About me</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
