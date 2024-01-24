import CalendarIcon from "../../assets/icons/CalendarIcon";
import SuitcaseIcon from "../../assets/icons/SuitcaseIcon";
import UserIcon from "../../assets/icons/UserIcon";
import WidgetMessageIcon from "../../assets/icons/WidgetMessageIcon";
import Widget from "./Widget";

const widgetsData = [
  {
    id: 1,
    icon: <CalendarIcon />,
    label: "Interviews",
    value: 86,
  },
  {
    id: 2,
    icon: <SuitcaseIcon />,
    label: "Apply",
    value: 75,
  },
  {
    id: 3,
    icon: <UserIcon />,
    label: "Profile",
    value: 45_673,
  },
  {
    id: 4,
    icon: <WidgetMessageIcon />,
    label: "Message",
    value: 93,
  },
];

function Widgets() {
  return (
    <>
      {widgetsData.map((widget) => (
        <Widget key={widget.id} widget={widget} />
      ))}
    </>
  );
}

export default Widgets;
