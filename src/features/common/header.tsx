export default function Header() {
  return (
    <header className="flex justify-between items-center py-8 px-12">
      <div>
        <h1 className="font-semibold text-xl">
          <a href="">Traveloca</a>
        </h1>
      </div>
      <nav>
        <ul className="flex items-center gap-x-8">
          <li>
            <a
              href=""
              className="uppercase"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="uppercase"
            >
              Tour
            </a>
          </li>
          <li>
            <a
              href=" "
              className="uppercase"
            >
              Package
            </a>
          </li>
          <li>
            <a
              href=""
              className="uppercase"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <button>Book</button>
      </div>
    </header>
  );
}
