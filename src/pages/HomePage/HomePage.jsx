import css from './home-page.module.css';

const HomePage = () => {
  return (
    <div className={css.phoneBook}>
      <p className={css.textPhoneBook}>Welcome to Phonebook</p>
      <img
        src="https://static.wixstatic.com/media/bdefd8_f6b7b86bbd354320b0db1b8260028902~mv2.gif"
        className={css.animatePhoneBook}
        alt="phonebook"
        width={500}
        height={300}
      />
    </div>
  );
};

export default HomePage;
