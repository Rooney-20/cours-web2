import Body from "../body";
import Footer from "../Footer";
import PageTitle from "../PageTitle";

const App = () => {
  const title = "Welcome to My App";
  const name1 = "Alice";
  const age1 = 25;
  const name2 = "Bob";
  const age2 = 30;
  const name3 = "Charlie";
  const age3 = 35;
  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title} />
      <Body name= {name1} age={age1} />
      <Body name= {name2} age={age2} />
      <Body name= {name3} age={age3} />
      <Footer footer = {footerText} />
    </div>
  );
};

export default App;
