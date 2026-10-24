const Skills = ({ skills, user }) => {
    console.log(user)
  return (
    <>
      {skills.map((item) => {
        return <h1>{item}</h1>;
      })}

      {user ? "User LoggedIn" : "Please Login"}

    </>
  );
};

export default Skills;
