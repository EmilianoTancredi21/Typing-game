const Navbar = () => {
  return (
    <>
      <header className="header">
        <a href="#">
          <img
            className="logo"
            alt="keyboard logo"
            src="src\assets\images\keyboard.png"
          />
        </a>
        <h2 className="logo--text">TypeRush</h2>
        <div className="mode">
          <ion-icon
            class="moon-icon"
            name="moon-outline"
            title="dark-mode"
          ></ion-icon>
          <ion-icon class="sun-icon" name="sunny-outline"></ion-icon>
        </div>
      </header>
    </>
  );
};

export default Navbar;
