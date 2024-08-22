import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h1>Welcome to Phonebook!</h1>
        Join us and simplify contact management today!
      </div>
    </div>
  );
};

export default HomePage;
