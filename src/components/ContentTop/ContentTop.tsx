import ContactUs from "../MenuOptions/ContactUs/ContactUs";
import Topic1 from "../Topic1/Topic1";
import { Styles } from "./ContentTop.styles";

type Props = {
  currentTopic: string;
};

export default function ContentTop({ currentTopic }: Props) {
  function RenderMenuOption() {
    switch (currentTopic) {
      case "Quem-somos":
        return <Topic1 />;

      case "Contato":
        return <ContactUs />;
      case "Projetos":
        return <div>Projetos</div>;
      default:
        return (
          <Styles.TitleText>
            Por uma
            <br />
            Fortaleza
            <br />
            mais igual.
          </Styles.TitleText>
        );
    }
  }

  return (
    <Styles.ContentTop currentTopic={currentTopic}>
      {RenderMenuOption()}
    </Styles.ContentTop>
  );
}
