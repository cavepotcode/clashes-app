import { useSelector } from "react-redux";
import { TournamentList } from "../../components";
import { RootState } from "../../store";

export const AdminDashboard = () => {
  const selectedPage = useSelector(
    (state: RootState) => state.navigation.selectedPage
  );

  return (
    <div className="flex flex-1 w-full h-full p-4">
      {selectedPage === "tournaments" && <TournamentList />}
    </div>
  );
};
