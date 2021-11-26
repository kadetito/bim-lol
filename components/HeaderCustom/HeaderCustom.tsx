import MenuCustom from "./MenuCustom";
import TopBar from "./TopBar";

export default function HeaderCustom() {
  return (
    <div className="header__global">
      <TopBar />
      <MenuCustom />
    </div>
  );
}
