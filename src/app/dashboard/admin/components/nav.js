import Image from 'next/image';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/images/first_section/logo.png"
          alt="GAD"
          width={101}
          height={48}
        />
        <span>Dashboard</span>
      </div>
      <div className="button">
          <button>Log out</button>
      </div>
    </nav>
  );
};

export default Nav;
